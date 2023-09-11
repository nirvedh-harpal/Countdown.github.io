const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secsEl = document.getElementById('secs')



const newYears = "26 November 2023";



function formatTime(time) {
    return time < 10 ? '0'+time : time 
}


function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor(totalSeconds / 3600 )% 24;
    const mins = Math.floor(totalSeconds / 60 ) %60;
    const secs = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days
    hoursEl.innerHTML = hours
    minsEl.innerHTML = mins
    secsEl.innerHTML = formatTime(secs)
 
}

countdown(); 



setInterval(countdown, 1000)