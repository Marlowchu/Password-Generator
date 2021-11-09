// Assignment Code
var generateBtn = document.querySelector("#generate");
var length
var lower
var capital
var number
var special

// array of possible outcomes
var lowerOption = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberOption = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialOption = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "+"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// when botton is clicked run create password function
function writePassword (params) {

  createPassword();

}


// create password function
var createPassword = function() {

  // Ask user for lenth of password
  do {

    length = window.prompt("Please enter a passwerd length from 8-128)");

    // If cancel buttom is pressed then exit function  
    if (length === null) {
      return;
    }

  }
// check to make sure a number between 8-128 was entered. will continue to ask untill correct value is entered
  while (128 < length || length < 8 ||length === null || isNaN (length));


  // ask user what type of characters they want in there password
  for ( var i = 0; i < 1;) {

  lower = confirm ("Lowercase Characters? ('OK' FOR YES OR 'CANCEL' FOR NO)");

  capital = confirm ("Uppercase Characters? ('OK' FOR YES OR 'CANCEL' FOR NO)");

  number = confirm ("Numbers? ('OK' FOR YES OR 'CANCEL' FOR NO)");

  special = confirm ("Special Characters? ('OK' FOR YES OR 'CANCEL' FOR NO)");

  // if user did not select any criteria generate a message
  if (lower == false && capital == false && number == false && special == false) {
    window.alert ( "Please select at least (1) character type"); 
   }

  // exist loop when at least 1 is chosen
  if (lower == true || capital == true || number == true || special == true) {
     i = 1
   }
  }

  // generate password based on input from user
  var newChoice = "";  

for ( var i = 0; i < length;) {
  
  
  // if user selected lowercase characters run if statement
  if (lower) {

    // create random nuber between 0 and the length of lowercase array
    var index = Math.floor(Math.random() * lowerOption.length);

    // the number generated will be the letter selected in the array
    var Choice = lowerOption[index];

    // increment the counter by 1 untill you reach the length the user input
    i++;
    
    // add charater to the password that is being built
    newChoice = newChoice + Choice;

    // if you have reached the desired lenght of the password exit loop
    if (i==length){
      break
    }
  
  }
 
  if (number) {
    
  var index = Math.floor(Math.random() * numberOption.length);
  var Choice = numberOption[index];
  i++;
  
  newChoice = newChoice + Choice;

  if (i==length){
    break
    }
  }

  if (special) {
    
  var index = Math.floor(Math.random() * specialOption.length);
  var Choice = specialOption[index];
  i++;
  
  newChoice = newChoice + Choice;
  if (i==length){
    break
    }
  }

  if (capital) {
    
  var index = Math.floor(Math.random() * lowerOption.length);
  var Choice = lowerOption[index].toUpperCase();
  i++;
  
  newChoice = newChoice + Choice;
  if (i==length){
    break
    }
  }
  
  
}
  
// after running for loop display what was create in the loop
  var newChoice =  window.alert(newChoice)
}










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