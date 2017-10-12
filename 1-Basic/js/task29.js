function check(num1, num2, num3){
    return ((num1>=50 && num1<=99) || (num2>=50 && num2<=99) || (num3>=50 && num3<=99))
}

console.log("30 45 60 - "+check(30,45,60));
console.log("199 60 45 - "+check(199,60,45));
console.log("75 110 14 - "+check(75,110,14));
console.log("13 49 900 - "+check(13,49,900));