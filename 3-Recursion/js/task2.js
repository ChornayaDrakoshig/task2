function findingNod(a,b){
    if (b>a){
        var t=a;
        a=b;
        b=t;
    }
    if (a % b === 0) return b
        else return findingNod(b, a % b);
}

console.log(findingNod(18,6));
console.log(findingNod(21,18));
console.log(findingNod(4,6));
console.log(findingNod(5,7));
