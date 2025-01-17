let countdown;
let serviceInSession;
const clock = document.getElementById("clock");
const livestreamButton = document.getElementById("door");
const daysUnit = document.querySelector(".days");
const hoursUnit = document.querySelector(".hours");
const minutesUnit = document.querySelector(".minutes");
const secondsUnit = document.querySelector(".seconds");

const startDate = new Date(2019, 9, 19, 11, 30, 00).getTime();
startDate > Date.now() ? timer(startDate) : calculateFutureDate(startDate);
function timer(date) {
  countdown = setInterval(() => {
    const now = Date.now();
    const differenceInTime = date - now;

    if (differenceInTime < 0) {
      clearInterval(countdown);
      clock.classList.add("hide");
      livestreamButton.classList.remove("hide");

      serviceInSession = setTimeout(() => {
        livestreamButton.classList.add("hide");
        calculateFutureDate(date);
        clock.classList.remove("hide");
      }, 7200000);
      return;
    }
    timeLeft(differenceInTime);
  }, 1000);
}

function timeLeft(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)); 
  const seconds = Math.floor((time % (1000 * 60)) / 1000); 
  
  const displayDays = `${days < 10 ? "0" : ""}${days}`; 
  const displayHours = `${hours < 10 ? "0" : ""}${hours}`; 
  const displayMinutes = `${minutes < 10 ? "0" : ""}${minutes}`; 
  const displaySeconds = `${seconds < 10 ? "0" : ""}${seconds}`; 
  
  daysUnit.textContent = displayDays;
  hoursUnit.textContent = displayHours;
  minutesUnit.textContent = displayMinutes;
  secondsUnit.textContent = displaySeconds;
  
}

function calculateFutureDate(dateTochange) {
  const newDate = new Date(dateTochange); 
  const weeklyDate = newDate.setDate(newDate.getDate() + 07); 
  timer(weeklyDate); 
 
}

function liveStream() {
  window.location.assign("#");
}
