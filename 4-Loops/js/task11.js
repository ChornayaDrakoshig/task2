var a=33, b=44;
if (b>a){
    var t=a;
    a=b;
    b=t;
}
while ( a % b !== 0){
    var n = a%b;
    a=b;
    b=n;
}
console.log(b);