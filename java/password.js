var x = 0;
var howMany = 0;

document.getElementById("passwordClick").addEventListener("click", passwordClick);

function passwordClick() {
    document.getElementById("passwordClick");
    charNum();
};

function charNum() {
    var x = prompt("Please select between 8 and 128 characters.");
    if ((x < "8") && (x > "128")) {
        alert("Try again");
    } else {
        var howMany = (parseInt(x)+0);
        isSpecTrue();
    }
    console.log(howMany + " characters.");
};
function isSpecTrue() {
    var specChar = prompt("Press OK if you would like special characters. Otherwise, cancel.");
    if (specChar) {
        
        isCapTrue();
    }  else {
        isCapTrue();
    }
}
// function clipboardClick();