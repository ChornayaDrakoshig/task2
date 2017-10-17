function isWeekend(str){
    var date= new Date(str);
    var day = date.getDay();
    if (day === 0 || day == 6) return "weekend"
    else return "not weekend";
}

console.log(isWeekend('Nov 15, 2014')); 
console.log(isWeekend('Nov 16, 2014')); 
console.log(isWeekend('Nov 17, 2014'));