// Assignment Code
var generateBtn = document.querySelector("#generate");

//prompts for lenght, upper, lower, #, special

// // display password

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", runGenerator);

function runGenerator() {

  alert ("Time to create your password!");

  //password characteristics
  var lenth = prompt("Choose Password Length *must be between 8 - 128 characters*")
  var up = confirm("Include Uppercase characters?")
  var low = confirm("Include Lowercase characters?")
  var num = confirm("Include Numerical characters?")
  var spec = confirm("Include Special characters?")
}