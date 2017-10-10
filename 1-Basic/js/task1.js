function showCurrentTime() {
var dayoptions = {
        weekday: 'long'
    };
var timeoptions = {
    timezone: 'UTC',
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
    second: 'numeric'
};

var dayWrapper = document.getElementById('weekday');
var timeWrapper = document.getElementById('time');
var date = new Date();

dayWrapper.innerHTML = date.toLocaleString('en-US', dayoptions);
timeWrapper.innerHTML = date.toLocaleString('en-US', timeoptions);
}