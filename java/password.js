var howMany = 0;
var specChar = true;
var specArray = ["~!@#$%^&*()_+-<>?/.;:"];
var capLet = true;
var capArray = ["abcdefghijklmnopqrstuvwxyz"];
var lowLet = true;
var lowArray = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numChar = true;
var numArray = ["1234567890"];
var randStr = [""];
var tempStr = [""];

document.getElementById("passwordClick")
.addEventListener("click", charNum);

// function passwordClick() {
//   // document.getElementById("passwordClick");
//   charNum();
// }
function charNum() {
  var howMany = prompt("Please select between 8 and 128 characters.");
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
    for (i = 0; i < howMany; i++) {
      tempStr = specArray[Math.floor(Math.random() * specArray.length)];
      // return tempStr;
    }
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
    for (i = 0; i < howMany; i++) {
      tempStr += capArray[Math.floor(Math.random() * capArray.length)];
      // return tempStr;

    }
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
    for (i = 0; i < howMany; i++) {
      tempStr += lowArray[Math.floor(Math.random() * lowArray.length)];
      // return tempStr;
    }
    isNumTrue();
  } 
  else {
    alert("no lower!");
    isNumTrue();
  }
}
function isNumTrue() {
  var numChar = confirm("Press OK if you would like to include numbers. Otherwise, cancel.");
  if (numChar) {
    alert("including numbers");
    for (i = 0; i < howMany; i++) {
      tempStr += numArray[Math.floor(Math.random() * numArray.length)];
      // return tempStr;
    }
    randPass();
  } 
  else {
    alert("no numbers!");
    randPass();
  }
}
function randPass() {
  for (i = 0; i < howMany; i++) {
    randStr = tempStr[Math.floor(Math.random() * tempStr.length)];
    // return randStr;
  }
  compPass();
  // var cpuRand = gamePlay[Math.floor(Math.random() * gamePlay.length)];   
  // random from RPS. cpuRand is cpu choice. gamePlay is options. 

}

function compPass() {
  document.getElementById("passChange").textContent = randStr;
  console.log(randStr);
}


// function clipboardClick();

// look into adding stopPropagation throughtout document.