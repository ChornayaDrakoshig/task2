function showCurrentTime() {
var dayoptions = {
        weekday: 'long'
    };

var dayWrapper = document.getElementById('weekday');
var timeWrapper = document.getElementById('time');
var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var sec = date.getSeconds();
    
dayWrapper.innerHTML = date.toLocaleString('en-US', dayoptions);
var output = hour>12 ? ""+(hour-12)+" PM" : ""+hour+" AM";
if (hour === 0) output="12 Midnight"
    else if (hour === 12) output="12 Noon";
output+=" : ";
output+= minute>9 ? minute : "0"+minute;
output+=" : ";
output+= sec>9 ? sec : "0"+sec;
timeWrapper.innerHTML = output;
}