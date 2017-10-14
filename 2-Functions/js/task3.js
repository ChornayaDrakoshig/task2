function substrings(str){
    var answ=new Array();
    for (i=0;i<str.length;i++){
        for (j=i+1;j<=str.length;j++){
            answ.push(str.substring(i,j));
        }
    }
    return answ;
}

console.log("dog");
console.log(substrings("dog"));