function exponent(x,n){
    if (n===1) return x
    else return x*exponent(x,n-1);
}

console.log(exponent(8,2));
console.log(exponent(3,2));
console.log(exponent(2,3));