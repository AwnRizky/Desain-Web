var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello World!';

var myImage = document.querySelector("img")

myImage.onclick = function(){
    var mySrc = myImage.getAttribute("src");
    if(mySrc === "images/firefox-icon.png"){
        myImage.setAttribute ("src", "images/logo-ptik1.png");
    } else {
        myImage.setAttribute ("src", "images/firefix-icon.png")
    }
}

function setUserName(){
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Mozilla is cool, " + myName;
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUsername(){
    var myName = prompt("Please Enter Your Name");
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Mozilla is cool, " + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storredName = localStorage.getItem("name");
    myHeading.innerHTML = "Mozilla is cool, " + storredName;
}

myButton.onclick = function(){
    setUserName();
}