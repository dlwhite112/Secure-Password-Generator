// Assignment Code
var generateBtn = document.querySelector("#generate");
// add character arrays
var lowCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [
  "@",
  "%",
  "+",
  "\\",
  ",",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

//prompts for lenght, upper, lower, #, special

// // display password

// // Write password to the #password input
function writePassword(val) {
  var password = val;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", runGenerator);

function runGenerator() {
  alert("Time to create your password!");

  var generatedPassword = "";
  var charactersSelected = [];

  // These prompts are to get the requirements for the password that is to be generated.
  var length = parseInt(
    prompt("Choose Password Length *must be between 8 - 128 characters*")
  );
  if (isNaN(length) === true) {
    alert("Hmmm... length should be a number between 8 - 128.");
    return;
  }
  if (length < 8) {
    alert(
      "Hmmm... not quite enough characters \n*must be between 8 - 128 characters*"
    );
    return;
  }
  if (length > 128) {
    alert(
      "Hmmm... try using fewer characters \n*must be between 8 - 128 characters*"
    );
    return;
  }

  // these variables will be used to decide what happens based off of the answers from the previous questions.
  var getUpCase = confirm("Include Uppercase characters?");
  var getLowCase = confirm("Include Lowercase characters?");
  var getNum = confirm("Include Numerical characters?");
  var getSpec = confirm("Include Special characters?");

  if (
    getUpCase === false &&
    getLowCase === false &&
    getNum === false &&
    getSpec === false
  ) {
    alert("There needs to be at least one character type!");
    return;
  } else {
    let randomIndex = 0;
    if (getUpCase) {
      charactersSelected = charactersSelected.concat(upCase);
    }
    if (getLowCase) {
      charactersSelected = charactersSelected.concat(lowCase);
    }
    if (getSpec) {
      charactersSelected = charactersSelected.concat(special);
    }
    if (getNum) {
      charactersSelected = charactersSelected.concat(numbers);
    }
    while (generatedPassword.length < length) {
      randomIndex = Math.floor(Math.random() * charactersSelected.length);
      generatedPassword += charactersSelected[randomIndex];
    }
  }
  return writePassword(generatedPassword);
}
runGenerator();
