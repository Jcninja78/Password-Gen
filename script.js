
var letter;

var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#$%^&*=-_';

var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var submit = document.getElementById("submit");
var yourPw = document.getElementById("yourPw");

while (letter !== null) {
    
    letter = prompt("Type 's' if you want symbols in your password")
    if (letter === "s") {
        characters += sym;
        yourPw.value = password(charNum.value, characters);
        };
        letter = prompt("Type 'n' if you want numbers in your password")
            if (letter === "n") {
            characters += sym;
            yourPw.value = password(charNum.value, characters);
        };
}

function password(characters){
		var pwd = '';
    for(var i = 0; i<l; i++){
    		pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}