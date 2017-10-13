function reverse(num){
    var str = num.toString();
    var l = str.length;
    var str2 = "";
    for (i=l-1;i>=0;i--){
        str2+=str[i];
    }
    return str2;
}

console.log("23444 - "+reverse(23444));
console.log("71 - "+reverse(71));
console.log("359154 - "+reverse(359154));