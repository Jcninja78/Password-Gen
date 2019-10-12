// var keys = {
//     lowerKeys:  "q w e r t y u i o p a s d f g h j k l z x c v b n m ",
//     upperKeys: "Q W E R T Y U I O P A S D F G H J K L Z X C V B N M",
//     specialKeys: "! @ # $ % ^ & * ( ) - _ = + [ { ] } \ | ; , < . > / ?",
//     numberKeys: "1 2 3 4 5 6 7 8 9 0",

// var passLength = prompt("What length password do you want? (must be between 8 and 128 characters");
// var specialQuestion = prompt("Do you want Special Characters?");
// var numberQuestion = prompt("Do you want Numbers?");
// var upperQuestion = prompt("Do you want Uppercase Letters?");
// var lowerQuestion = prompt("Do you want Lowercase Letters?");
// };



// function generate(){ 
//     let complexity = document.getElementById("slider").value;

//     let values = "1234567890!@#$%^&*()qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

//     let password = "";

//     for(var i = 0; i <= complexity; i++){
//         password = password + values.charAt(Math.floor(Math.random() *Math.floor(values.length - 1) ));
//     }
//     document.getElementById("display").value = password;
// }

var letter;
// var letterOne;

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
// yourPw.value = password(charNum.value, characters);
// submit.addEventListener("click",function(e){
//     var characters = char;
//     (numBox.checked) ? characters += num : '';
//     (symBox.checked) ? characters += sym : '';
//     yourPw.value = password(charNum.value, characters);
// });

function password(characters){
		var pwd = '';
    for(var i = 0; i<l; i++){
    		pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}