function curday(separator){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    
    var dd = day>9 ? ""+day : "0"+day;
    var mm = month>9 ? ""+month : "0"+month;
    return mm+separator+dd+separator+year;
}
console.log(curday('/')); 
console.log(curday('-'));