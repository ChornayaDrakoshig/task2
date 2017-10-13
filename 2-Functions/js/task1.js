function reverse(num){
    var str = num.toString;
    return str.split('').reverse().join(''); // str.split is not a function ???
}

console.log("23444 - "+reverse(23444));
console.log("71 - "+reverse(71));
console.log("359154 - "+reverse(359154));