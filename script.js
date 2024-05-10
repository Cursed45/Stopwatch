let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
  clearInterval(timer);
  timer = setInterval(updateStopwatch, 1000);
}

function stopStopwatch() {
  clearInterval(timer);
}

function resetStopwatch() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateStopwatch();
}

function updateStopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  const timeString = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  document.querySelector('.stopwatch').textContent = timeString;
}

function pad(value) {
  return value < 10 ? '0' + value : value;
}
