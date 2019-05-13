/*Name: Travis Suggitt
  Assignment: CS390 Assignment #11
  Created: 10/17/2018
  Description: SignIn.js is the javascript file that verifies the emaail and password inputs from SignIn.html*/

/*Three listeners are called upon loading the web page which will run InitializeForm every time any input is changed*/
window.onload = function () {
    var userInput = document.getElementById("userId");
    var passInput = document.getElementById("password");
    var pass2Input = document.getElementById("password2");
    userInput.addEventListener("input", InitializeForm, false);
    passInput.addEventListener("input", InitializeForm, false);
    pass2Input.addEventListener("input", InitializeForm, false);
}

/*Validates user email input. email must be a string followed by @ symbol followed by string followed by . symbol
  followed by a string
  returns: 1 if email is valid, 0 if not*/
function userValidate() {
    var userIn = document.getElementById('userId').value;
    var pattern = /\S+@\S+\.\S+/;

    if (pattern.test(userIn) == true) {
        return 1;
    } else {
        return 0;
    }
}

/*Validates the password and adds html to the page telling the user the strength of the password.
  returns: returns: 1 if password is valid, 0 if not*/
function passValidate() {
    var passwordCheck = 0;
    var password = document.getElementById('password').value;
    var numCheck = /\d/;
    var symCheck = /\W/;
    var strElement = document.getElementById("strength");
    strElement.style.fontWeight = "bold";

    if (password.length >= 8) {
        passwordCheck++;
    }
    if (numCheck.test(password) == true) {
        passwordCheck++;
    }
    if (symCheck.test(password) == true) {
        passwordCheck++;
    }

    switch(passwordCheck) {
        case 0:
            console.log("very weak");
            document.getElementById("strength").innerHTML = "Very Weak";
            strElement.style.color = "red";
            break;
        case 1:
            console.log("weak");
            document.getElementById("strength").innerHTML = "Weak";
            strElement.style.color = "orange";
            break;
        case 2:
            console.log("medium");
            document.getElementById("strength").innerHTML = "Medium";
            strElement.style.color = "yellow";
            break;
        case 3:
            console.log("strong");
            document.getElementById("strength").innerHTML = "Strong";
            strElement.style.color = "green";
            break;
        default:
            console.log("Not sure how you got here?")
    }

    if (passwordCheck == 3) {
        return 1;
    } else {
        return 0;
    }
}

/* Verifies that 2nd password text box matches the first
   returns: 1 if passwords match, 0 if not*/
function pass2Validate() {
    var pass1 = document.getElementById('password').value;
    var pass2 = document.getElementById('password2').value;
    var samePass = pass1.localeCompare(pass2);

    if (samePass == 0) {
        return 1;
    } else {
        return 0;
    }

}

/* Calls the 3 validation functions and will enable the submit button upon all three functions returning 1*/
function InitializeForm () {
    var userValid = userValidate();
    var pass1Valid = passValidate();
    var pass2Valid = pass2Validate();
    var button = document.getElementById('button');

    if (userValid && pass1Valid && pass2Valid == 1) {
        button.disabled = false;
    }


}