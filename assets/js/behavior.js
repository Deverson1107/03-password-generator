var uppercase;
var upperanswer = null;
var lowercase;
var loweranswer = null;
var numeric;
var numericanswer = null;
var specialchar;
var specialanswer = null;
var length = 0;

// Opening Alert for the user.
alert("Welcome to my password generator! You will be asked to choose from the following password criteria:")

while (upperanswer === null && loweranswer === null && numericanswer === null && specialanswer === null ) {

    
// Asking for the use of upper-case letters in the password.
    while (uppercase !== "yes" && uppercase !== "no") {
   
        uppercase = prompt("Do you want upper-case characters? (Please answer yes or no)");
    
        if (uppercase === "yes") {
            upperanswer = true;
            console.log(upperanswer);
        }
    
        else if (uppercase === "no") {
            upperanswer = false;
            console.log(upperanswer);
        }

        else {
            alert("Please enter a valid answer.")
        }
    }

// Asking for the use of lower-case letters in the password.
        while (lowercase !== "yes" && lowercase !== "no") {
   
        lowercase = prompt("Do you want lower-case characters? (Please answer yes or no)");
    
        if (lowercase === "yes") {
            loweranswer = true;
            console.log(loweranswer);
        }
    
        else if (lowercase === "no") {
            loweranswer = false;
            console.log(loweranswer);
        }

        else {
            alert("Please enter a valid answer.")
        }
    }

// Asking for the use of numbers in the password.
    while (numeric !== "yes" && numeric !== "no") {
   
        numeric = prompt("Do you want numeric characters? (Please answer yes or no)");
    
        if (numeric === "yes") {
            numericanswer = true;
            console.log(numericanswer);
        }
    
        else if (numeric === "no") {
            numericanswer = false;
            console.log(numericanswer);
        }

    else {
        alert("Please enter a valid answer.")
        }
    }

// Asking for the use of special characters in the password.
    while (specialchar !== "yes" && specialchar !== "no") {
   
        specialchar = prompt("Do you want special characters? (Please answer yes or no)");
    
        if (specialchar === "yes") {
            specialanswer = true;
            console.log(specialanswer);
        }
    
        else if (specialchar === "no") {
            specialanswer = false;
            console.log(specialanswer);
        }

        else {
            alert("Please enter a valid answer.")
        }
    }

// Determine the length of the password.
    while (length > 128 || length < 8 || typeof length === "string") {
   
        length = prompt("How long do you want this password to be? (Must be between 8 and 128 characters)");
        
    
        if (length < 128 && length > 8) {
            alert("Your password will be " + length + " characters long.")
            console.log(length);
            console.log(typeof length);
        }

        else {
            alert("Your password must be between 8 and 128 characters and be a number.")
            console.log(typeof length);
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

// ASK HOW TO CONVERT DATA TYPE
// ASK WHERE TO PUT IN .toLowercase




      



