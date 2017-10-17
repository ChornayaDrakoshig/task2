function yesterday(str){
    var today= new Date(str);
    var yesterday = new Date (today.getTime()-1000*60*60*24);
    return yesterday.toString();
}

console.log(yesterday('Nov 15, 2014')); 
console.log(yesterday('Nov 16, 2015')); 
console.log(yesterday('Nov 17, 2016'));