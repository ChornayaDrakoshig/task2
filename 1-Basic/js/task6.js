var year = prompt("Write the year", '');
if (year != null){
    var str ="The year is ";
    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 == 0)) str+="leap"
    else str+="not leap";
    alert(str);
}