/* generate-octicons
 *
 * Utility script for generating a strongly typed representation of all
 * octicons currently in the master branch of primer/octicons. Automatically
 * downloads the latest version of the `sprite.octicons.svg` file.
 */

import fs = require('fs')
import xml2js = require('xml2js')
import path = require('path')
import toCamelCase = require('to-camel-case')

const filePath = path.resolve(
  __dirname,
  '..',
  'node_modules',
  'octicons',
  'build',
  'sprite.octicons.svg'
)

/* tslint:disable:no-sync-functions */
const file = fs.readFileSync(filePath, 'utf-8')

interface IXML2JSResult {
  svg: { symbol: ReadonlyArray<IXML2JSNode> }
}
interface IXML2JSNode {
  $: { [key: string]: string }
  path: ReadonlyArray<IXML2JSNode>
}

xml2js.parseString(file, function(err, result: IXML2JSResult) {
  const viewBoxRe = /0 0 (\d+) (\d+)/
  const out = fs.createWriteStream(
    path.resolve(__dirname, '../app/src/ui/octicons/octicons.generated.ts'),
    {
      encoding: 'utf-8',
    }
  )

  out.write('/*\n')
  out.write(
    ' * This file is automatically generated by the generate-octicons tool.\n'
  )
  out.write(' * Manually changing this file will only lead to sadness.\n')
  out.write(' */\n\n')

  out.write('export class OcticonSymbol {\n')

  out.write(
    '\n  public constructor(public w: number, public h: number, public d: string) { }\n\n'
  )
  let count = 0
  result.svg.symbol.forEach(function(symbol) {
    count++

    const id = symbol.$.id
    const viewBox = symbol.$.viewBox
    const pathData = symbol.path[0].$.d

    const viewBoxMatch = viewBoxRe.exec(viewBox)

    if (!viewBoxMatch) {
      console.error(`*** ERROR! Unexpected viewBox format for ${id}`)
      process.exitCode = 1
      return
    }

    const [, w, h] = viewBoxMatch
    const jsFriendlyName = toCamelCase(id)

    out.write(
      `  public static get ${jsFriendlyName}() { return new OcticonSymbol(${w}, ${h}, '${pathData}') }\n`
    )
  })

  out.write('}\n')
  out.end()

  console.log(`Wrote ${count} octicons`)
})
