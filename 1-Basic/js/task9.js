function isLeap(year){
    var answ=false;
    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 == 0))
        answ=true;
    return answ;
}

var dayoptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
    };
var daysnum = [31,28,31,30,31,30,31,31,30,31,30,31];
console.log(daysnum);
var answer = 0;

var curDay = document.getElementById('curdate');
var daysLeft = document.getElementById('daysleft');

var date = new Date();
curDay.innerHTML = date.toLocaleString('en-US', dayoptions);

var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();

if (month == 11){
    if (day>25){
    year+=1;
    if (isLeap(year)) answer=360
    else answer=359; //// дней в году без учета 26-31 декабря
    answer+=31-day;
    }
    else {
        answer=25-day;
    }
}
else {
    if (isLeap(year)) daysnum[1]++;
    answer=daysnum[month]-day;
    month++;
    while (month<11){
        answer+=daysnum[month];
        month++;
    }
    answer+=25;
}

daysLeft.innerHTML = answer;