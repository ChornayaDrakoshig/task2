function addMinutes(date,minutes){
    var newdate = new Date(date.getTime()+minutes*60*1000);
    return newdate;
}
console.log(addMinutes(new Date(2014,10,2), 30).toString());