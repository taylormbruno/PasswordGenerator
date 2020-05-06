
var howMany = 0;

var specChar = true;
var specStr = "~!@#$%^&*()_+-<>?/.;:";

var capLet = true;
var capStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lowLet = true;
var lowStr = "abcdefghijklmnopqrstuvwxyz";

var numChar = true;
var numStr = "1234567890";




function passwordClick() {
  var randStr = "";
  var validStr = "";
  var tempStr = "";

  var howMany = document.getElementById("inputChar");
  console.log(howMany.value);

  var capLetCheck = document.getElementById("gridCheck1");
  if ($(capLetCheck).is(':checked')) {
    validStr+=capStr;
  }
  else {
    capLet = false;
    console.log("No capital letters.");
  }

  var lowLetCheck = document.getElementById("gridCheck2");
  if ($(lowLetCheck).is(':checked')) {
    validStr+=lowStr;
  }
  else {
    lowLet = false;
    console.log("No lowercase letters.");
  }
  
  var numCheck = document.getElementById("gridCheck3");
  if ($(numCheck).is(':checked')) {
    validStr+=numStr;
  }
  else {
    numChar = false;
    console.log("No numbers.");
  }
  
  var specCheck = document.getElementById("gridCheck4");
  if ($(specCheck).is(':checked')) {
    validStr+=specStr;
  }
  else {
    specChar = false;
    console.log("No special characters.");
  }

  //Creating a tempStr from valid characters to create password;
  if ((howMany < 0) || (howMany > 129) || (howMany === NaN)) {
   if ((capLet && lowLet && numChar && specChar) === false) {
    $('#passwordFinal').text("Please select amount and type of characters.");
   }
   else {
    $('#passwordFinal').text("Please select a number between 8 and 128.");
   }
  }
  else if (((capLet && lowLet && numChar && specChar) === false) && ((howMany > 0) || (howMany < 129))) {
    $('#passwordFinal').text("Please select the type of characters from the checkbox above.");
  }
  else {
    for (var i = 0; i < howMany.value; i++) {
      var tempStr = validStr[Math.floor(Math.random() * validStr.length)];
      randStr+=tempStr;
    }
    var copyText = document.getElementById("passwordFinal");
    var copytextVal = copyText.value;
    console.log(copytextVal);var clipPop = document.getElementById("clipboardClick");
    clipPop.dataset.content = copytextVal;
    document.getElementById("passwordFinal").textContent = randStr;
  }
}


function clipboardClick() {
  var copyText = document.getElementById("passwordFinal");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  $(function () {
    $('[data-toggle="popover"]').popover()
  });
}
