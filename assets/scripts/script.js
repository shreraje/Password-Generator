// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables criteria
var number = ('0123456789');
var special = ('!@#$%^&*');
var uppercase = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
var lowercase = ('abcdefghijklmnopqrstuvwxyz');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
