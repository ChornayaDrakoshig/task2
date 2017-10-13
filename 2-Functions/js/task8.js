function prime(num){
    var answ = true;
    if (num>1){
        for (i=2;i<Math.floor(Math.sqrt(num))+1;i++){
            if (num % i === 0) {
                answ = false;
                break;
            }
        }
    }
    else {
        answ=false;
    }
    return answ;
}

console.log("7 is "+prime(7));
console.log("2 is "+prime(2));
console.log("4 is "+prime(4));
console.log("18 is "+prime(18));
console.log("31 is "+prime(31));