function transitionAccounts() {
    as = document.querySelector('#accounts');
    as.selected += 1;
}
function transitionEntries() {
    es = document.querySelector('#entries');
    es.selected += 1;
}

var currentUser = 'twashing@gmail.com';

function simpleXhrSentinel(xhr) {
    return function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {

                // reload page to reflect new login state
                console.log("XMLHttpRequest SUCCESS: " + xhr.status);
                window.location.reload();
            }
            else {
                console.log("XMLHttpRequest ERROR: " + xhr.status);
                navigator.id.logout();
            }
        }
    }
}

function verifyAssertion(assertion) {

    // Your backend must return HTTP status code 200 to indicate successful
    // verification of user's email address and it must arrange for the binding
    // of currentUser to said address when the page is reloaded

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/verify-assertion", true);

    // see http://www.openjs.com/articles/ajax_xmlhttp_using_post.php
    var param = "assertion="+assertion;
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Content-length", param.length);
    xhr.setRequestHeader("Connection", "close");
    xhr.send(param); // for verification by your backend

    xhr.onreadystatechange = simpleXhrSentinel(xhr);
}

function signoutUser() {
    // Your backend must return HTTP status code 200 to indicate successful
    // sign out (usually the resetting of one or more session variables) and
    // it must arrange for the binding of currentUser to 'null' when the page
    // is reloaded
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/signout", true);
    xhr.send(null);
    xhr.onreadystatechange = simpleXhrSentinel(xhr);
}

var signinLink = document.getElementById('signin');
if (signinLink) {
    signinLink.onclick = function() {

        console.log("Signin CLICKED");
        navigator.id.watch({ loggedInUser: currentUser, onlogin: verifyAssertion, onlogout: signoutUser });
        navigator.id.request(); };
}

var signoutLink = document.getElementById('signout');
if (signoutLink) {
    signoutLink.onclick = function() {

        console.log("Signout CLICKED");
        navigator.id.logout();
    };
}
