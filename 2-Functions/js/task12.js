function isPerfect(n){
    var sum=1;
    for (i=2;i<Math.floor(n/2)+1;i++){
        if (n % i === 0) sum+=i;
    }
    return (n===sum);
}

console.log("6 "+isPerfect(6));
console.log("28 "+isPerfect(28));
console.log("33 "+isPerfect(33));
console.log("496 "+isPerfect(496));