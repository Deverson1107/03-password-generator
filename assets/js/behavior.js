var uppercase;
var upperanswer = null;
var lowercase;
var loweranswer = null;
var numeric;
var numericanswer = null;
var specialchar;
var specialanswer = null;
var size = 0;

// Opening Alert for the user.
alert("Welcome to my password generator! You will be asked to choose from the following password criteria:")

while (upperanswer === null && loweranswer === null && numericanswer === null && specialanswer === null ) {
   
// Asking for the use of upper-case letters in the password.
    while (uppercase !== "yes" && uppercase !== "no") {
   
        uppercase = prompt("Do you want upper-case characters? (Please answer yes or no)");
        uppercase = uppercase.toLowerCase();
    
        if (uppercase === "yes") {
            upperanswer = true;
        }
    
        else if (uppercase === "no") {
            upperanswer = false;
        }

        else {
            alert("Please enter a valid answer.")
        }
    }

// Asking for the use of lower-case letters in the password.
    while (lowercase !== "yes" && lowercase !== "no") {
   
        lowercase = prompt("Do you want lower-case characters? (Please answer yes or no)");
        lowercase = lowercase.toLowerCase();
    
        if (lowercase === "yes") {
            loweranswer = true;
        }
    
        else if (lowercase === "no") {
            loweranswer = false;
        }

        else {
            alert("Please enter a valid answer.")
        }
    }

// Asking for the use of numbers in the password.
    while (numeric !== "yes" && numeric !== "no") {
   
        numeric = prompt("Do you want numeric characters? (Please answer yes or no)");
        numeric = numeric.toLowerCase();
    
        if (numeric === "yes") {
            numericanswer = true;
        }
    
        else if (numeric === "no") {
            numericanswer = false;
        }

    else {
        alert("Please enter a valid answer.")
        }
    }

// Asking for the use of special characters in the password.
    while (specialchar !== "yes" && specialchar !== "no") {
   
        specialchar = prompt("Do you want special characters? (Please answer yes or no)");
        specialchar = specialchar.toLowerCase();
    
        if (specialchar === "yes") {
            specialanswer = true;
        }
    
        else if (specialchar === "no") {
            specialanswer = false;
        }

        else {
            alert("Please enter a valid answer.")
        }
    }

// Determine the size of the password.
    while (size > 128 || size < 8 || size === 0) {
   
        size = prompt("How long do you want this password to be? (Must be between 8 and 128 characters)");

        size = parseInt(size, 10);

        if (size <= 128 && size >= 8 && size !== NaN) {
            alert("Your password will be " + size + " characters long.");
        } 
        else {
            alert("Please enter a valid answer.");
            size = 0;
        }
    }

// Keeps the user from inputing all criteria as false.
    if (upperanswer === false && loweranswer === false && numericanswer === false && specialanswer === false){
        uppercase = null;
        upperanswer = null;
        lowercase = null;
        loweranswer = null;
        numeric = null;
        numericanswer = null;
        specialchar = null;
        specialanswer = null;
        length = 0;
        alert("You must choose at least one of the criteria. Please start again.");
    }
    else {
        alert("Thank you.");
    }

}

//Setting up where the password will be generated and the buttons.
var password = document.querySelector(".pass");

//Setting up all possible strings.
if (upperanswer === true) {
    var upCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
}
else {
    var upCharacters = "";
}

if (loweranswer === true) {
    var lowCharacters = "abcdefghijklmnopqrstuvwxyz";
}
else {
    var lowCharacters = "";
}

if (numericanswer === true) {
    var numCharacters = "1234567890";
}
else {
    var numCharacters = "";
}

if (specialanswer === true) {
    var specCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"; 
}
else {
    var specCharacters = "";
}

//Generating the password.
function makepass(length) {
    var result = "";
    var characters = upCharacters + lowCharacters + numCharacters + specCharacters;
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
password.textContent = makepass(size);

//Selecting the buttons from the DOM.
var newpassword = document.querySelector(".button1");
var copypassword = document.querySelector(".button2");

//Create new password.
newpassword.addEventListener("click", function (event) {
    event.preventDefault();
    password.textContent = makepass(size);
});

//Copy the password to the clipboard.
copypassword.addEventListener("click", function () {
    var inputpass = document.createElement('input');
    document.body.appendChild(inputpass);
    inputpass.value = password.textContent;
    inputpass.select();
    document.execCommand("copy");
    inputpass.remove();
    alert ("Copied password to the clipboard.");
});
























  

      



