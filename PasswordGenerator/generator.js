var letter = document.getElementById("let");
var symbol = document.getElementById("sym");
var number = document.getElementById("num");
var out1 = document.getElementById("passwordG");


var but = document.getElementById("sub");

var alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['1', '2','3','4','5','6','7','8','9','0'];
var symbols = ["!","^","+","%","&","/","(",")","=","?","-","_","*"];
var passList = [];
var passw = "";

but.onclick = function(){
  for(var i = 0; i < letter.value; i++){
    passList.push(alp[Math.floor(Math.random() * alp.length)]);
  }
  for(var i = 0; i < symbol.value; i++){
    passList.push(symbols[Math.floor(Math.random() * symbols.length)]);
  }
  for(var i = 0; i < number.value; i++){
    passList.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }
  for (var i = passList.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = passList[i];
        passList[i] = passList[j];
        passList[j] = temp;
    }
  for(var j = 0; j < passList.length; j++){
    passw += passList[j];
  }
  out1.innerHTML = passw;
  passw = "";
  passList = [];
}