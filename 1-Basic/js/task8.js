var num = Math.floor(Math.random() * 10) + 1;
var str = "";
var answ = prompt("Guess the number", '');
if (answ != null){
    if (num == answ)  str="Good Work"
    else str+="Not matched";
    alert(str);
}
