/**
 * Created by Irshad on 23/4/18.
 *
 * Generate access token using headless browser (phantomJS)
 * Replace {username} with your 6 digit upstox client code
 * Replace {password} with your upstox account password
 * Replace {password2fa} with your Date of Birth
 * Replace {api_key} with your upstox api key
 * Replace {redirect_uri} with your upstox api key
 */

/* Upstox login URL generated
 */
var upstox_login_url = "https://api.upstox.com/index/dialog/authorize?apiKey={api_key}&redirect_uri={redirect_uri}&response_type=code";

// URL of jQuery CDN to inject into Upstox webpage
var jqueryCDN = 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js';

// Create an object
var page = require('webpage').create();

// Step 1: Load upsotx login page using the url
page.open(upstox_login_url, function(status) {

    // Step 2: inject jQuery in the page
    page.includeJs(jqueryCDN, function() {

        // Step 4: proceed after submitting the login form
        page.onLoadFinished = function() {

            // Step 5: inject jQuery on the second page
            page.includeJs(jqueryCDN, function() {

                // Step 7: Terminate the script after 'Accept' button has been clicked
                page.onLoadFinished = function() {
                    page.render("after_accept.png");
                    console.log('Successfully redirected to: '+page.url);
                    console.log('Note: Make sure you are handling the login code on redirect uri.');
                    console.log('Terminating...');
                    phantom.exit();
                };

                // Step 6: Click 'Accept' button on the second page
                page.evaluate(function() {
                    $("#allow").click();
                });

            });

        };

        // Step 3: write the login credentials on the page after it has been loaded
        page.evaluate(function() {
            $("#name").val('{username}');
            $("#password").val('{password}');
            $("#password2fa").val('{password2fa}');
            $("body > form > fieldset > div.bottom-box > div > button").click();
        });

    });

});
