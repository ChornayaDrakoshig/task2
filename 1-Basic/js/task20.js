function compare(num1, num2) {
    return (num1 / Math.abs(num1) !== num2 / Math.abs(num2));
}

console.log("for 5 and -4 its "+compare(5,-4));
console.log("for -3 and -4 its "+compare(-3,-4));
console.log("for 5 and 7 its "+compare(5,7));
console.log("for -1 and 3 its "+compare(-1,3));