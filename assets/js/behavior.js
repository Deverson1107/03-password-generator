var uppercase;
var upperanswer;
var lowercase;
var loweranswer;
var numeric;
var numericanswer;
var specialchar;
var specialanswer;
var length;
var lengthanswer;

// Opening Alert for the user.
alert("Welcome to my password generator! You will be asked to choose from the following password criteria:")

// Asking for the use of upper-case letters in the password.
while (uppercase !== "yes" || uppercase !== "no") {
   
    uppercase = prompt("Do you want upper-case characters? (Please answer yes or no)");
    
    if (uppercase === "yes") {
        console.log(uppercase);
        upperanswer = true;
        console.log(upperanswer);
    }
    
    else if (uppercase === "no") {
        console.log(uppercase);
        upperanswer = false;
        console.log(upperanswer);
    }

    else {
        alert("Please enter a valid answer.")
    }
}

// Asking for the use of lower-case letters in the password.
while (lowercase !== "yes" || lowercase !== "no") {
   
    lowercase = prompt("Do you want lower-case characters? (Please answer yes or no)");
    
    if (lowercase === "yes") {
        console.log(lowercase);
        loweranswer = true;
        console.log(loweranswer);
    }
    
    else if (lowercase === "no") {
        console.log(lowercase);
        loweranswer = false;
        console.log(loweranswer);
    }

    else {
        alert("Please enter a valid answer.")
    }
}

// Asking for the use of numbers in the password.
while (numeric !== "yes" || numeric !== "no") {
   
    numeric = prompt("Do you want numeric characters? (Please answer yes or no)");
    
    if (numeric === "yes") {
        console.log(numeric);
        numericanswer = true;
        console.log(numericanswer);
    }
    
    else if (numeric === "no") {
        console.log(numeric);
        numericanswer = false;
        console.log(numericanswer);
    }

    else {
        alert("Please enter a valid answer.")
    }
}

// Asking for the use of special characters in the password.
while (specialchar !== "yes" || specialchar !== "no") {
   
    specialchar = prompt("Do you want special characters? (Please answer yes or no)");
    
    if (specialchar === "yes") {
        console.log(specialchar);
        specialanswer = true;
        console.log(specialanswer);
    }
    
    else if (specialchar === "no") {
        console.log(specialchar);
        specialanswer = false;
        console.log(specialanswer);
    }

    else {
        alert("Please enter a valid answer.")
    }
}

// Asking for the specific length the user wants the password to be.
while (length > 128 && length < 8 && typeof length !== "number") {
   
    length = prompt("How long do you want this password to be? (Must be between 8 and 128 characters)");
    length = Number(linkanswer);
    
    if (length < 128 && length && typeof link === "number" > 8) {
        length = Number(linkanswer);
        alert("Your password will be " + lengthanswer + " characters long.")
    }

    else {
        alert("Your password must be between 8 and 128 characters and be a number.")
    }
}

