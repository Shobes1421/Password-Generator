
//variable to target button ID
var generateBtn = document.querySelector("#generate");

function generatePassword() {


//Array set up for each specific character for password. 
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberInput = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];


 
var resultsInput = [];
var usersInput = [];

uppercase = [];
    
    //ask the User how many characters they'd like in their password
    var numCharacter = prompt ("How many characters do you want in your password, please enter between 8-128 characters.");
    
    //If user inputs anything other than params set then this error will prompt.
    if (Number(numCharacter < 8) | Number(numCharacter > 128) | isNaN(numCharacter)) {
        alert("Please enter a number between 8 and 128!");
        return;
    } 
    
    //Promt to ask if they user wants Uppercase letters
    var uppercase = confirm ("Do you want Uppercase Letters");
    
    //Promp to ask if the user wants Lowercase Letters
    var lowercase = confirm ("Do you want lowercase Letters");
    //Promt to ask if the user wants numbers
    var numberInput = confirm ("Do you want numbers in your password?");
    
    //Promt to ask if the user wants Symbols
    var SpecialCharacter = confirm ("Do you want special characters in your password?");


if (numberInput){
  resultsInput = resultsInput.concat(numberInput);
  
}

if (uppercase){
  resultsInput = resultsInput.concat(uppercase);

}

if (lowercase){
  resultsInput = resultsInput.concat(lowercase);

}

if (specialCharacter){
  resultsInput = resultsInput.concat(specialCharacter);
}

// For loop to randomize numbers from the arrays
for (var i = 0; i < numCharacter; i++) {
      usersInput.push (resultsInput[Math.floor(Math.random() * resultsInput.length)]); 
  }
    return usersInput.join("") ;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







