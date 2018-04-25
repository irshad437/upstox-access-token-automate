# phantomMagicUpstox
Automate the process of generating access token for Upstox api using phantomJS.

NOTE: It doesn't open any browser. So, you can execute this script in CLI.

#### Make sure you've a valid redirect uri and you're handling the login code on your redirect uri.

_PhantomJS is a headless WebKit scriptable with a JavaScript API._

It's a very simple script which can be run through command line on Windows/Linux/Ubuntu.

You just need to download phantomJS from here: http://phantomjs.org/

After downloading, extract the contents and you'll get a file named phantomJS. That's the file which will be used to execute this script.

If you're on windows, then Bingo! I've included phantomJS file in the repository itself.

#### First change all the variables in the script. e.g., {username}, {password} etc.

Then, simply type the following command:

    phantomjs generateAccessToken.js
