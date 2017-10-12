function check(num1, num2){
    return ((num1>=50 && num1<=99) && (num2>=50 && num2<=99))
}

console.log("45 and 60 - "+check(45,60));
console.log("99 and 60 - "+check(99,60));
console.log("75 and 110 - "+check(75,110));
console.log("13 and 50 - "+check(13,50));