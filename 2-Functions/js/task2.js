function palindrome(str){
    var i=0;
    var j=str.length-1;
    var answ=true;
    while (i<j){
        while (str[i] === " ") i++;
        while (str[j] === " ") j--;
        if (str[i] !== str[j]) {
            answ=false;
            break;
        }
        else {
            i++;
            j--;
        }
    }
    return answ;
}

console.log("madam "+palindrome("madam"));
console.log("nurses run "+palindrome("nurses run"));
console.log("r "+palindrome("r"));
console.log("palindrome "+palindrome("palindrome"));