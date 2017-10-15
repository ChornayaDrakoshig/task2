function sign(a,b,c){
    if (a*b*c > 0) return "+"
    else if (a*b*c == 0) return "0"
    else return "-";
}

console.log(sign(1,2,3));
console.log(sign(-1,2,3));
console.log(sign(1,-2,-3));
console.log(sign(1,0,3));