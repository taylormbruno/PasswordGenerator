var howMany = 0;
var specChar = true;
// );
var specStr = "~!@#$%^&*()_+-<>?/.;:";
var capLet = true;
// );
var lowStr = "abcdefghijklmnopqrstuvwxyz";
var lowLet = true;
// );
var capStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = true;
// );
var numStr = "1234567890";




function passwordClick() {
  var randStr = "";
  var validStr = "";
  var tempStr = "";
  var howMany = prompt("Please select between 8 and 128 characters.");
  if ((howMany < 8 || howMany > 128) || (howMany === null)) {
    alert("Try again");
    return passwordClick();
  } 
  else {
    alert(howMany + " characters.");
  }
  var specChar = confirm("Press OK if you would like special characters. Otherwise, cancel.");
  if (specChar === true) {
    validStr+=specStr;
  } 
  else {
    alert("No specials.");
  }
  var capLet = confirm("Press OK if you would like capital letters. Otherwise, cancel.");
  if (capLet === true) {
      validStr+=capStr;
  } 
  else {
    alert("No capitals.");
  }
  var lowLet = confirm("Press OK if you would like lowercase letters. Otherwise, cancel.");
  if (lowLet === true) {
    validStr+=lowStr;
  } 
  else {
    alert("No lower.");
  }
  var numChar = confirm("Press OK if you would like to include numbers. Otherwise, cancel.");
  if (numChar === true) {
    validStr+=numStr;
  }
  else {
    alert("No numbers.");
  }
  //Creating a tempStr from valid characters to create password;
  for (var i = 0; i < howMany; i++) {
    var tempStr = validStr[Math.floor(Math.random() * validStr.length)];
    randStr+=tempStr;
  }
  document.getElementById("passChange").textContent = randStr;

  //Checking for desired results.
  console.log("Length: " + howMany);
  console.log("Special characters: " + specChar);
  console.log("Capital: " + capLet);
  console.log("Lowercase: " + lowLet);
  console.log("Number: " + numChar);
  console.log("Valid characters: " + validStr);
  console.log("Final Password: " + randStr);
}


function clipboardClick() {
  var copyText = document.getElementById("passChange");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the text:" + copyText.value);
}


