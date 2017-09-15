### Download Desktop
  - [ ] User can download latest (Mac & Windows) Desktop from https://desktop.github.com/    
    - [ ] Mac: https://central.github.com/deployments/desktop/desktop/latest/darwin
    - [ ] Windows: https://central.github.com/deployments/desktop/desktop/latest/win32
  - [ ] Release notes page is up-to-date
  - [ ] Help page is accessible

### Welcome Flow
  - [ ] Create your account (/join?source=github-desktop)
    - [ ] User is not automatically logged into Desktop post account creation
  - [ ] `Sign in to Github.com` link
    - [ ] `Sign in` successful if valid username/email and password
      - [ ] If 2FA activated, user sent auth code to enter (test SMS and authenticator app)
	- [ ] Sign in successful with active 2FA code, user goes to Configure Git
	  - [ ] User sees Repository landing page if sign in successful
	  - [ ] Error message if code is wrong or inactive 
      - [ ] Error message if incorrect username/email or password
    - [ ] Forgot link (/password_reset)
    - [ ] `Cancel` returns to initial Welcome Flow
    - [ ] `Sign in using your browser` opens default browser
      - [ ] Browser login, "authorize" GitHub Desktop, “accept” link
        - [ ] If successful, Desktop shown in `/settings/applications` in user profile
  - [ ] `Sign in to Enterprise` link (works with v2.8 and up)
    - [ ] `Continue` successful if server address is valid, else error message
      - [ ] `Sign in using your browser` opens default browser
        - [ ] Browser login, [insert custom security measure], Authorize GitHub Desktop, “accept” link
    - [ ] User goes to Configure Git if successful
    - [ ] `Cancel` returns to initial Welcome Flow
    - [ ] User served generic message if not authorized to access Enterprise server
  - [ ] Skip "username+password" step
    - [ ] Configure Git
      - [ ] Name and email pulled from global `.gitconfig` file, if configured
  	- [ ] If recognized, your avatar is present in example commit
      - [ ] `Continue` okay if fields populated or blank
  	- [ ] Valid login credentials from dotcom or Enterprise carried through
	  - [ ] User sees Repository landing page if sign in successful
  - [ ] Usage Data
    - [ ] Checked by default; user can uncheck. (Should not be checked if user on free plan only.)
      - [ ] Clicking `Finish`, and user is signed in successfully to Desktop
    - [ ] `Cancel` returns to initial Configure Git page

### Repositories landing page; default no repositories 
  - [ ] Create New Repository (Mac: ⌘N; Windows: Ctrl+N)
    - [ ] Modal opens with name, path (choose option), readme (unchecked), git ignore, license. Name and path mandatory.
      - [ ] If `Add this repository` warning message appears, clicking it adds to Repo list
    - [ ] `Create Repository` button adds new repo, which is added to Repo list
    - [ ] `Cancel` button does not save any changes made; modal closed
  - [ ] Clone a Repository (Mac: ⇧⌘O; Windows: Ctrl+Shift+O)
    - [ ] Enter valid URL or username/repo, else error message
    - [ ] Valid path can be entered or selected, else error message
    - [ ] All repos from both GitHub.com and Enterprise are populated -- your repos are listed first, followed by org
      - [ ] Results are filterable, and can be selected for cloning
    - [ ] `Clone` creates repo at selected path
      - [ ] Repo added to Repo list
    - [ ] `Cancel` closes modal, no repo cloned
  - [ ] Add a Local Repository (Mac: ⌘O; Windows: Ctrl+O)
    - [ ] Valid path can be entered or selected
    - [ ] `Add repository` activated if repo path exists
      - [ ] Repo added to Repo list
      - [ ] If directory path not valid, 'Create a new repo' error message is present
    - [ ] `Cancel` closes modal, no repo added
  - [ ] Drag and drop repository
    - [ ] User can drag existing local repository into Desktop
      - [ ] Successful attempt adds repo to Repo list; else error message

### Application
  - [ ] Minimize, Maximize, Close buttons work in top nav
  - [ ] Double-clicking local desktop icon opens the application (Mac only)
  - [ ] Double clicking top nav bar toggles full-screen / last used screen-size (Mac only); Exit by (Mac: ^⌘f11; Windows: Alt)
  - [ ] Clicking Desktop icon in dock/taskbar opens the application
  - [ ] Changing desktop icon name while app is open results in package error; closed app name change is successful

### GitHub Desktop menu top-level
  - [ ] About GitHub Desktop
    - [ ] Current version shown
    - [ ] Links to release notes (dotcom), terms (modal), licenses (modal)
    - [ ] Clicking the version number copies to clipboard
    - [ ] Edge case: If build is "old", error message displays warning user to "... manually check for updates".
      - [ ] Clicking `Check for updates` button produces "read-only volume" error message, with link for help
    - [ ] Clicking `Check for updates` button timestamps last attempt
      - [ ] If update available, `Install Update` button will quit app and install update
      - [ ] If update available, download banner is present in main window with `restart` and `what’s new` links
      - [ ] If checking for update or download latest update, the `Check for updates` button is disabled
      - [ ] Restarting the app automatically checks for updates
    - [ ] `Close` button closes modal 
  - [ ] Preferences/Options (Mac/Windows: ⌘,)
    - [ ] Accounts
      - [ ] GitHub.com name, handle, avatar, `sign out` button, if user signed in
      - [ ] Enterprise handle, avatar,  `sign out` button, if user signed in
      - [ ] User can sign out of either account
      - [ ] User can sign-in to both Enterprise and GitHub.com at same time  
    - [ ] Git
      - [ ] Username and email are displayed if `.gitconfig` configured for Welcome flow
      - [ ] `Save` button saves any changes made
      - [ ] `Cancel` button does not save any changes made; modal closed
    - [ ] Advanced
      - [ ] External Editor options shown in dropdown; else show "Install Atom?" link
      - [ ] Usage data selection carried through from Welcome flow; user can opt-in/out
        - [ ] Check `stats-opt-out` value in Dev Tools > Application > Local storage > file://
      - [ ] Confirmation dialogue for removing repositories is checked by default; user can toggle
          - [ ] Check `ConfirmDiscardChanges` value in Dev Tools > Application > Local storage > file://
      - [ ] Confirmation dialogue for disgarding files is checked by default; user can toggle
          - [ ] Check `ConfirmRepoRemoval` value in Dev Tools > Application > Local storage > file://
      - [ ] `Save` button saves any changes made
      - [ ] `Cancel` button does not save any changes made; modal closed
  - [ ] Install command line tool installs tool at `/usr/local/bin/github` (ok to install more than once; Mac only as Windows done automagically, Helper may require password)
    - [ ] Clicking `OK` closes modal
  - [ ] Quit/Exit Desktop (Mac: ⌘Q)
    - [ ] Quitting/Exiting and reopening Desktop returns you to last visited repo

### File top-level menu
  - [ ] Create New Repository (Mac: ⌘N; Windows: Ctrl+N)
  - [ ] Clone a Repository (Mac: ⇧⌘O; Windows: Ctrl+Shift+O)
  - [ ] Add a Local Repository (Mac: ⌘O; Windows: Ctrl+O)
  - [ ] Options... (Windows only: Ctrl+,)
  - [ ] Exit (Windows only; quits the app)

### Edit top-level menu
  - [ ] Undo (Mac: ⌘Z; Windows: Ctrl+Z)
  - [ ] Redo (Mac: ⇧⌘Z; Windows: Ctrl+Y)
  - [ ] Cut (Mac: ⌘X; Windows: Ctrl+X)
  - [ ] Copy (Mac: ⌘C; Windows: Ctrl+C)
  - [ ] Paste (Mac: ⌘V; Windows: Ctrl+V)
  - [ ] Select all (Mac: ⌘A; Windows: Ctrl+A)

### View top-level menu
  - [ ] Show Changes (Mac: ⌘1; Windows: Ctrl+1)
  - [ ] Show History (Mac: ⌘2; Windows: Ctrl+2)
  - [ ] Show Repositories List (Mac: ⌘T; Windows: Ctrl+T)
  - [ ] Show Branches List (Mac: ⌘B; Windows: Ctrl+B)
  - [ ] Enter Full Zoom (Mac: ^⌘F; Windows: F11)
  - [ ] Reset Zoom (Mac: ⌘0; Windows: Ctrl+0)
  - [ ] Zoom In (Mac: ⌘=; Windows: Ctrl+=)
  - [ ] Zoom Out (Mac: ⌘-; Windows: Ctrl+-)
  - [ ] Toggle Developer Tools (Mac: ⌥⌘I; Windows: Ctrl+Shift+I)

### Repository top-level menu. (Only enabled if one repo present)
  - [ ] Push (Mac: ⌘P; Windows: Ctrl+P)
    - [ ] Commits from repo pushed to .com; error message shown if conflicts
  - [ ] Pull (Mac: ⇧⌘P; Windows: Ctrl+Shirt+P)
    - [ ] Commits from repo pulled from .com; error message shown if conflicts
  - [ ] Remove
    - [ ] Repo is removed from Repo List; confirmation option if enabled
  - [ ] View on GitHub (Mac: ⌥⌘G; Windows: Ctrl+Alt+G)
    - [ ] Repo on .com is opened; must be logged in if private repo or Enterprise
  - [ ] Open in Terminal/Command prompt
    - [ ] Local repo is opened
    - [ ] If git not installed, modal asks to Open with Git or Install Git
  - [ ] Show in Finder/Explorer (Mac: ⇧⌘F; Windows: Ctrl+Shift+F)
    - [ ] Local repo is opened
  - [ ] Open in External Editor (Mac: ⇧⌘A; Windows: Ctrl+Shift+A); see External Editor option in prefs
    - [ ] Secondary modal appears if no Editors set; option to Download Atom 
  - [ ] Repository settings
    - [ ] Remote path can be edited; origin already set
      - [ ] `Saved` button saves last entry
      - [ ] `Cancel` button closes modal
    - [ ] Ignored Files
      - [ ] `.gitignore` file contents are shown and can be edited
	- [ ] `Saved` button saves last entry; changes create a new commit
	- [ ] `Cancel` button closes modal

### Branch top-level menu
  - [ ] New Branch (Mac: ⇧⌘N; Windows: Ctrl+Shift+N)
    - [ ] Clicking `Create Branch` makes new branch based on the entered name, if not a duplicate
    - [ ] Master branch is mentioned in the list
    - [ ] `Cancel` button closes modal
  - [ ] Rename (cannot be master)
    - [ ] `Rename` button changes branch name if field updated
    - [ ] `Cancel` button closes modal
  - [ ] Delete (cannot be master)
    - [ ] Option to delete branch on the remote; default is unchecked
    - [ ] `Delete` button deletes branch name
    - [ ] `Cancel` button closes modal
  - [ ] Update from Default Branch (cannot be master)
  - [ ] Merge into Current Branch
    - [ ] Use can filter existing branches
    - [ ] User can select branch, other than current
    - [ ] `Merge` button only activated if something to merge
    - [ ] `Cancel` button closes modal
  - [ ] Compare on GitHub (Mac: ⇧⌘C; Windows: Ctrl+Shift+C) (if repo already published on `github.com`)
  - [ ] Create Pull request (Mac: ⌘R; Windows: Ctrl+R) opens Pull Request on `github.com` 
    - [ ] If branch unpublished, dialogue asks to publish the branch

### Window top-level menu (Mac only)
  - [ ] Minimize, Zoom (maximize app size), Close, Bring All to Front, GitHub Desktop

### Help top-level menu
  - [ ] `Report Issue` opens issue template in Desktop repo on `github.com`
  - [ ] `Contact GitHub Support` opens `https://github.com/contact` page with user and build prepopulated
  - [ ] `Show User Guides` opens Desktop help page on `github.com`
  - [ ] `Show Logs in Finder/Explorer` opens Finder/Explorer logs in local directory
    - [ ] Mac: `ls ~/Library/Application\ Support/GitHub\ Desktop/Logs/*.log`
    - [ ] Windows: `%LOCALAPPDATA%\\Desktop\\*.desktop.production.log`
  - [ ] About GitHub Desktop (Windows only)

### Repositories list
  - [ ] Current repo is always shown in top slot with respective icon; if repo exists
  - [ ] Opening list shows all repos in categorized format with a working filter
    - [ ] `ESC` clears the filter
    - [ ] All repos (private, enterprise, local, public, forked) have proper icon and found in the proper category (GitHub.com/Enterprise/Other)
      - [ ] User must have paid account for private repos
  - [ ] Repositories cloned from non-github servers should always be in the Other group, and have the 'computer' icon.
  - [ ] Selecting a repo updates Changes/History/Diff areas
    - [ ] If no Changes, Diff area shows `Open this repository` link to Finder/Explorer on local
  - [ ] `Right-click` on any repo shows `Open in Terminal`, `Open in Finder/Explorer`, `Open in External Editor`, and `Remove` options
  - [ ] Repos which have been removed locally (and trash emptied) have 'cannot find repository' warning
    - [ ] Relaunching the app when it displays a missing repository preserves the repo's name and last seen path
    - [ ] Remove a repo which can not be found (deleted locally & trash emptied)
  - [ ] Repos which are cloning display a progress bar

### Changes tab
  - [ ] Any changed files appear in the list, with respective +/•/- sign; with arrow keys enabled
    - [ ] User can check none, or check one or more files to commit; list is scrollable
      - [ ] User can select one or more lines to commit; diff is scrollable
      - [ ] Right-clicking any file show menu with options
        - [ ] User can discard the file; pending confirmation dialogue
	  - [ ] `Do not show this message again`overrides the preference setting if true
        - [ ] User to ignore single or all files, show in Finder/Explorer, or reveal in external editor
  - [ ] Panes can be resized horizontally, and contents resize to take the full width
    - [ ] Quitting Desktop and relaunching remembers sizes

### History tab
  - [ ] All commits listed in chronological order, with avatar, date and name; list is scrollable with arrow keys enabled
    - [ ] Right clicking any commit shows options: Revert, Copy SHA, View on GitHub

### Diffs tab		
  - [ ] All commits have avatar, # of files changed, actions dropdown, commit message, commit description (optional)
    - [ ] Long commit descriptions can be toggled with expand/collapse icon
      - [ ] Reverting commit repopulates commit area
        - [ ] Error message if no changes to commit
  - [ ] All files within a commit listed, with respective +/•/- sign; list is scrollable
    - [ ] Diffs are viewable; list is scrollable with arrow keys enabled
      - [ ] Green is for additions, red for deletions
      - [ ] Different file types are rendered properly
  - [ ] Panes can be resized horizontally, and contents resize to take the full width

### Commit section
  - [ ] Commit created if user clicks `Commit to X` button with commit message and at least one checked file
    - [ ] `Fetch origin` changes to `Push` with number of commits badge
  - [ ] Avatar of user is shown
  - [ ] User can at-mention those associated with the respective repo; either subject or description field is ok
  - [ ] User can pound-mention an issue in the either subject or description field; issue number should populate
  - [ ] Description field is optional
  - [ ] User can undo last commit
    - [ ] `Push` with number of commits badge is decremented or reverts to `Fetch origin`
  - [ ] `Undo` button disabled if user is pushing commit

### Branches list
  - [ ] Current branch always shows if repository present
  - [ ] Opening list shows all branches in categorized format with a working filter
    - [ ] Active branch is highlighted and marked with a check
    - [ ] `ESC` clears the filter
  - [ ] Default branch labeled and listed first, with timestamp
  - [ ] Selecting a branch switches branches
  - [ ] Creating a new branch shows `Publish branch` button
    - [ ] Publishing successful if logged in only; else error message
      - [ ] `Create Pull Request` menu option shows warning if branch not published yet
  - [ ] Renamed branches updated on .com and vice-versa if logged in; else error message
    - [ ] Opens modal with ability to enter new name
  - [ ] Deleted branches updated on .com and vice-versa if logged in; else error message
    - [ ] Deleting branch show warning message

### Fetching origin/Pull
  - [ ] Code is constantly being fetched from .com with timestamp
    - [ ] If Pull Requests on .com, they are reflected with down arrow and quantity
    - [ ] Pull Requests and Commits can co-exist; error surfaces if merge commit
  - [ ] User cannot Push/Pull without being signed in; error message surfaced
    - [ ] Push/Pull works with public/private/Enterprise repos
  - [ ] When a branch is local-only make sure that the `Fetch` button changes to `Publish` and it publishes
  
### Dotcom
  - [ ] If Desktop linked to .com (/settings/applications), the Desktop icon should show on File Revisions tab for all Pull Requests.
    - [ ] Clicking the "computer icon" opens from a Pull Request page opens the branch on Desktop
  - [ ] If private email is enabled (http://github.com/settings/emails), user is blocked from pushing to all associated repositories on Desktop?

### 1.1+ placeholder
- Pull request CI status
- Pull request list
- Merge tool for conflicted files
- Conflicted files vs changed files
- Relationship between branches