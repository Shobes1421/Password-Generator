// Assignment Code
var numbers = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var symbols = "!@#$%^&*(){}[];:<>/|\_-+=";

// Password Length and different characters
var passwordLength = confirm("Password must be between 8 and 128 characters")
if (passwordLength > 8 || passwordLength > 128) {
    alert("Please answer the following");
} else {
    var passSymbols = confirm("Would you like Symbols?"); 
    var passUpper = confirm("Would you like UPPERCASE letters?"); 
    var passLower = confirm("Would you like LOWERCASE letters?"); 
    var passNumbers = confirm("Would you like NUMBERS?"); 
    var charSet = ""; 
}
function randomPassword() {
    if (passNumbers) {      
        charSet += numbers;
    }
} 

if (passUpper) {
    charSet += upperCase;
}




// Add event listener to generate button
generateBtn = document.getElementById("generate")
generateBtn.addEventListener("click", writePassword);
