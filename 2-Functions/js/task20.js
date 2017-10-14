function randString(n){
    var def = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var answ = "";
    for (i=0;i<n;i++){
        answ += def[Math.floor(Math.random()*62)];
    }
    return answ;
}

console.log(randString(8));
console.log(randString(3));
console.log(randString(11));