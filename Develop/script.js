// Assignment Code
var generateBtn = document.querySelector("#generate");
var length
var lower
var capital
var number
var special



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword (params) {

  window.checkLenght();

}



var checkLenght = function() {

  // Ask user for their choice
  do {

    length = window.prompt("Please enter valid passwerd length (8-128 chafacters)");
    // var length = window.prompt("Length of password between 8-128 characters?");
   
    if (length === null) {
      return;
    }


  }

  while (128 < length || length < 8 ||length === null || isNaN (length));


  lower = confirm ("lowercase Characters? ('OK' FOR YES OR 'CANCEL' FOR NO)");

  capital = confirm ("Capital Characters? ('OK' FOR YES OR 'CANCEL' FOR NO)");

  number = confirm ("Numbers? ('OK' FOR YES OR 'CANCEL' FOR NO)");

  special = confirm ("Special Characters? ('OK' FOR YES OR 'CANCEL' FOR NO)");

}


    // lowercase prompt and verify

  // do {

  //   lowerCase = window.prompt("lowercase Characters? (YES OR NO)");

  //   lowerCase = confirm ("lowercase Characters? ('OK' FOR YES OR 'CANCEL' FOR NO)")
   
  //   var length = window.prompt("Length of password between 8-128 characters?");
   
  //   if (lowerCase === null) {
  //     return;
  //   }

  // }

  // while (lowerCase != Boolean );





// var upperCase = window.prompt("Uppercase Characters? (YES OR NO)");

// var specialCharacter = window.prompt("Numeric characters? (YES OR NO)");

// var specialCharacter = window.prompt("Special characters? (YES OR NO)");


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page