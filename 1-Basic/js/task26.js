var str = prompt("Write the string", '');

if (str.length >= 3) {
    var l = str.length;
    var str2 = str.substring(l-3, l) + str + str.substring(l-3, l);
    alert(str2);
}