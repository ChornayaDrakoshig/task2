function mName(date){
    var arr=["January","February","March","April","May","June","July","August","September","October","November","December"];
    month= date.getMonth();
    return arr[month];
}


console.log(mName(new Date("10/11/2009"))); 
console.log(mName(new Date("11/13/2014")));