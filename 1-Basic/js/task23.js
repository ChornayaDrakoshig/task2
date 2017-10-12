var str = prompt("Write the string", '');

if (str.length >1 ){
    var str2=str[str.length-1];
    str2+=str.substring(1,str.length-1);
    str2+=str[0];
    alert(str2);
}
else if (str.length = 1 ){
    alert(str);
}