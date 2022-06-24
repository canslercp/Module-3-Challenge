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




var generatePassword = function () {
  // Define global variables and arrys
    var i = 0;

    var num = [];
    for(var i = 0; i < 128; i++){
      num.push(i);
    }
    console.log(num);

    var SP = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","~"]
    // Use iteration to create an uppercase alphabet array
    var alphaUC = Array.from(Array(26)).map((e, i) => i + 65);
    var UC = alphaUC.map((x) => String.fromCharCode(x));
    // Use iteration to create an uppercase alphabet array
    var alphaLC = Array.from(Array(26)).map((e, i) => i + 97);
    var LC = alphaLC.map((x) => String.fromCharCode(x));
    
  // Ask user for their choice
  var userChoice = window.prompt("How many characters would you like your password to conatin?");

  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  }
  //Prompt the user for the password criteria
  //    a. password legnth 8 <= i <=128
  //    b.confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  if (userChoice >= 8 && userChoice <= 128) {

    var useSP = window.confirm("Click OK to confirm using special characters.");
    var useNum = window.confirm("Click OK to confirm using numbers.");
    var useLC = window.confirm("Click OK to confirm using lowercase characters.");
    var useUC = window.confirm("Click OK to confirm using upercase characters,");

  //3. Generate password????????????????
    if (useSP === true){}
      // var numSP = 
      //for (var i=0; i<userChoice; i++) {
      //  var rnum = Math.floor(Math.random() * SP.length);
      //  console.log(rnum);
      //}

    else if (useSP === true && useNum === true){}
    else if (useSP === true && useNum === true && useLC ===true){}
    else if (useSP === true && useNum === true && useLC ===true && useUC === true){}

    //return prompt if at least one character type is not selected
    else {
      window.alert("At least one character type should be selected");
      return;
    }
  }

  //return prompt if user inputs a length less than 8 or greater than 128
  else {
    window.alert("Please choose a character length of at least 8, but no more than 128");
    return;
  }

  //4. Display password to the page
  return "Generated password goes here!"

}
