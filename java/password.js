var howMany = 0;
var specChar = true;
var specArray = ["~!@#$%^&*()_+-<>?/.;:"];
var capLet = true;
var capArray = ["abcdefghijklmnopqrstuvwxyz"];
var lowLet = true;
var lowArray = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numChar = true;
var numArray = ["1234567890"]
var randStr = 0;



document.getElementById("passwordClick").addEventListener("click", passwordClick);

function passwordClick() {
    document.getElementById("passwordClick");
    charNum();
};

function charNum() {
    var howMany = prompt("Please select between 8 and 128 characters.");
    if ((howMany < 8) && (howMany > 128)) {
        alert("Try again");
    } else {
        alert(howMany + " characters.");
        isSpecTrue();
    }
}
function isSpecTrue() {
    var specChar = confirm("Press OK if you would like special characters. Otherwise, cancel.");
    if (specChar) {
        alert("including special");
        isCapTrue();
    }  else {
        alert("no specials for you!");
        isCapTrue();
    }
}
function isCapTrue() {
    var capLet = confirm("Press OK if you would like capital letters. Otherwise, cancel.");
    if (capLet) {
        alert("including capitals");
        isLowTrue();
    }  else {
        alert("no capitals for you!");
        isLowTrue();
    }
}
function isLowTrue() {
    var lowLet = confirm("Press OK if you would like lowercase letters. Otherwise, cancel.");
    if (lowLet) {
        alert("including lower");
        isNumTrue();
    }  else {
        alert("no lower for you!");
        isNumTrue();
    }
}
function isNumTrue() {
    var numChar = confirm("Press OK if you would like to include numbers. Otherwise, cancel.");
    if (numChar) {
        alert("including numbers");
        randPass();
    }  else {
        alert("no numbers for you!");
        randPass();
    }
}
function randPass() {
    if (specChar && lowLet && capLet) {
        specChar[Math.floor(Math.random()*howMany)];
        console.log(compPass());
    }
    else {
        alert("I broke.");
    }
}
function compPass() {
    document.getElementById("passChange").innerHTML = randStr;
}
// function clipboardClick();