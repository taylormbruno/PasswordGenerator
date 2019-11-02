var howMany = 0;
var specChar = true;
var specStr = "~!@#$%^&*()_+-<>?/.;:";
var capLet = true;
var lowStr = "abcdefghijklmnopqrstuvwxyz";
var lowLet = true;
var capStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = true;
var numStr = "1234567890";
var randStr = "";
var tempStr = "";
var tempChar = "";

document.getElementById("passwordClick")
.addEventListener("click", charNum);

// function passwordClick() {
//   // document.getElementById("passwordClick");
//   charNum();
// }

function charNum() {
  var howMany = prompt("Please select between 8 and 128 characters.");
  console.log(howMany);
  if (howMany < 8 && howMany > 128) {
    alert("Try again");
  } 
  else {
    alert(howMany + " characters.");
    isSpecTrue();
  }
}

function isSpecTrue() {
  var specChar = confirm("Press OK if you would like special characters. Otherwise, cancel.");
  if (specChar) {
    alert("including special");
    tempStr+=specStr;
    isCapTrue();
  } 
  else {
    alert("no specials!");
    isCapTrue();
  }
}

function isCapTrue() {
  var capLet = confirm("Press OK if you would like capital letters. Otherwise, cancel.");
  if (capLet) {
    alert("including capitals");
    tempStr+=capStr;
    isLowTrue();
  } 
  else {
    alert("no capitals!");
    isLowTrue();
  }
}

function isLowTrue() {
  var lowLet = confirm("Press OK if you would like lowercase letters. Otherwise, cancel.");
  if (lowLet) {
    alert("including lower");
    tempStr+=lowStr;
    isNumTrue();
  } 
  else {
    alert("no lower!");
    isNumTrue();
  }
}

function isNumTrue() {
  var numChar = confirm("Press OK if you would like to include numbers. Otherwise, cancel.");
  if (numChar === true) {
    alert("including numbers");
    tempStr+=numStr;
    randPass();
  } 
  else {
    alert("no numbers!");
    randPass();
  }
}

function randPass() {
  console.log(howMany);
  for (var i = 0; i < howMany; i++) {
    var tempChar = tempStr[Math.floor(Math.random() * tempStr.length)];
    randStr+=tempChar;
  }
  
  finalPass();
}

function finalPass() {
  document.getElementById("passChange").textContent = randStr;
  console.log(randStr);
  console.log(tempStr);
  console.log(tempChar);
}


// function clipboardClick();