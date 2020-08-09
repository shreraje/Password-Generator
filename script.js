// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables criteria
var number = ("0123456789");
var special = ("!@#$%^&*()");
var uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var lowercase = ("abcdefghijklmnopqrstuvwxyz");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// function for user to choose a number to generate a random password
function generatePassword() {
  var limit = prompt("Please choose a number of characters for your random new password. It must be between 8 and 128 number.");
  var choice = "";
  if (limit < 8 || limit > 128) {
    alert("You must choose a number between 8 and 128");
 
    return generatePassword();
  }

  // Variables to confirm if user uses any of the follwing characters:
var num = confirm("Any number you want to use for your new password?");
var specialchar = confirm("Any special character you want to use for your new password?");
var upper = confirm("Any uppercase letter you want to use for your new password?");
var lower = confirm("Any lowercase letter you want to use for your new password?");


// If and if else loop
if (num && specialchar && upper && lowercase) {
  choice = (choice + number);
  choice = (choice + special);
  choice += uppercase;
  choice += lowercase;


  // If user wish not to choose uppercase, lowercase, numbers and special characters,
  // OR user wish not  to answer any of the questions, 
  // user will get alert and returns to option to generate password again.
} else if (choice === "") {
  alert ("You must choose at least one type from Uppercase, Lowercase, Numbers and special characters.")
  return generatePassword();
}


var newPassword = "";

for (i= 0 ; i <= limit; i++) {

  newPassword += choice.charAt(Math.floor(Math.random() * (choice.length)));

}
return newPassword;
}