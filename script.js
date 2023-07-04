// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let passwordText = document.querySelector("#password");

// length
let length = Number(prompt("Enter the length of your password between 8-128 characters."))

// types
let charType = prompt("What should be included in your password? Type 'uppercase, lowercase, numbers, symbols'. ")


function password(length, charType) {
  let charGen = {
    lowercase: 'abcdefghijklmnop',
    uppercase: 'ABCDEFGHIJKLMNOP',
    numbers: '0123456789',
    symbols: '!@#$%^&*()-_=+',
};

var charTypes = charType.toLowerCase().split(', ');
    charSet = "";
    for(var i=0; i < charTypes.length; i++) {
      charSet += charGen[charTypes[i]];
    }

    console.log(charSet);

    var retVal = "";
    
    for (var i = 0; i < length; i++) {
      retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return retVal;
  }

passwordText.value = password(length, charType);

}

// event listener to generate button
generateBtn.addEventListener("click", writePassword);

function copyPassword() {
  document.getElementById("password").select();
  navigator.clipboard.writeText(copyText.value);
  alert("Password copied to clipboard!" + copyText.value);



const generateButton = document.getElementById('generateBtn')
}
//<button id="generate">Generate</button>
//<input type="text" id="password" />