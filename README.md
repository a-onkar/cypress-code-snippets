# Cypress Workshop: 

# Project Setup & Pre-Requisite:
- Install Node.js 
- VSCode
- Clone repo
- Navigate to proect folder
- Run command: npm install
- Run command: npx cypress open


# PS: To clone all branches

- git clone git://example.com/myproject
- cd myproject
- git branch -a
* master
  remotes/origin/HEAD
  remotes/origin/master
  remotes/origin/v1.0-stable
  remotes/origin/experimental
 
- If you just want to take a quick peek at an upstream branch, you can check it out directly:

$ git checkout origin/experimental

- But if you want to work on that branch, you'll need to create a local tracking branch which is done automatically by:

$ git checkout experimental

and you will see:
Branch experimental set up to track remote branch experimental from origin.
Switched to a new branch 'experimental'

# Our case:
- $ git checkout origin/Web-Elements
- $ git checkout Web-Elements

or

- $ git checkout -b Web-Elements remotes/origin/Web-Elements
