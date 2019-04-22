1) Add refresh robustness to the list.
    If the user refreshes the page, show the previously added items to the list.

2) Run "npm uninstall -g nodemon"
    - "npm install nodemon"
Nodemon is no longer a global dependency. Make an npm script that will let you run your app using nodemon.


3) Add a route on your app to /message that returns a simple text to the user
