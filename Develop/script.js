// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




var generatePassword = function() {
  // Ask user for their choice
  var userChoice = window.prompt("Enter length and or character type");

  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  }

  // Convert to uppercase to make comparisons easier
  userChoice = userChoice.toUpperCase();

  // If choice is L
  if (userChoice === L) {
    var userLength = window.prompt("Enter a character length of at least 8 but no more than 128")
  // If choice is C
  } else if (userChoice === C) {
    var charType = window.prompt("Would you like to inclue lowercase?")
        // Not sure how to finish this just yet
  // If user choice is LC
  } else if (userChoice === LC || userChoice === CL) {
    var userLength = window.prompt("Enter a character length of at least 8 but no more than 128")
    var charType = window.prompt("Would you like to inclue lowercase?")
        // Not sure how to finish this just yet
  } else
   //Need to send user back to the original promt after a message saying the need to choose criteria

}