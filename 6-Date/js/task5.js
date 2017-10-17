function dateComp(date1,date2){
    if (date1.getTime()>date2.getTime()) return "Date1 > Date2";
    if (date1.getTime()==date2.getTime()) return "Date1 = Date2";
    if (date1.getTime()<date2.getTime()) return "Date1 < Date2";
}


console.log(dateComp(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00'))); 
console.log(dateComp(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00'))); 
console.log(dateComp(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));