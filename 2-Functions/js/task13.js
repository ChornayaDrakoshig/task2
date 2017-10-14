function dividers(num){
    var arr = new Array();
    for (i=1;i<Math.floor(num/2);i++){
        if (num % i ===0) arr.push(i);
    }
    arr.push(num);
    return arr;
}
console.log(dividers(15));
console.log(dividers(16));
console.log(dividers(17));