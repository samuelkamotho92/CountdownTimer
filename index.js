const minEL = document.getElementById("Minutes");
const hourEL = document.getElementById("Hours");
const secEL = document.getElementById("Seconds");
const daysEL = document.getElementById("Days");
const newYears = " 1 Jan 2022";
function countdown() {
     const newYearsDate = new Date(newYears);
     const currentDate = new Date();
     const totalSeconds = (newYearsDate - currentDate) / 1000 ;
     const days = Math.floor(totalSeconds / 3600 /24);
     const hours = Math.floor(totalSeconds / 3600 %24);
     const minutes = Math.floor(totalSeconds /60) %60;
     const seconds = Math.floor(totalSeconds) %60;
     minEL.innerHTML = minutes;
     hourEL.innerHTML = hours;
     secEL.innerHTML = seconds;
     daysEL.innerHTML = days;

}
countdown();
setInterval(countdown,1000);