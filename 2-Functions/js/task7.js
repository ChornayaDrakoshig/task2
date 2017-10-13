function count(str){
    var l = str.length;
    var num = 0;
    var vowels = ["e","u","i","o","a","E","U","I","O","A"];  
    for (i=0;i<l;i++){
        for (j=0;j<10;j++){
            if (str[i] === vowels[j]) num++;
        }
    }
    return num;
}
console.log (count("The quick brown fox")); //5
console.log (count("I'm not your manic pixie dream girl")); //12