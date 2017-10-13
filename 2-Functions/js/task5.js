function upperfirst(str){
    var up = true;
    var str2 = "";
    var l = str.length;
    for (i = 0;i<l;i++){
        if (up) str2+=str[i].toUpperCase();
            else str2+=str[i];
        if (up) up=false;
        if (!up && str[i] === " ") up = true;
    }
    return str2;
}

console.log(upperfirst("the quick brown fox"));