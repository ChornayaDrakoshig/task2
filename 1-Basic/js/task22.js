var str = prompt("Write the string", '');
var position = prompt("Write the position", '');

if (position < str.length +1 ){
    var str2=str.substring(0,position-1);
    str2+=str.substring(position, str.length);
    alert(str2);
}


