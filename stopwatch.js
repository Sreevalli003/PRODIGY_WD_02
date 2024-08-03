// script.js
let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateDisplay, 10);
}

function stopTimer() {
    if (!isRunning) return;
    isRunning = false;
    elapsedTime = Date.now() - startTime;
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    display.textContent = '00:00:00.000';
}

function updateDisplay() {
    const now = Date.now();
    elapsedTime = now - startTime;
    const time = new Date(elapsedTime);
    const hours = String(time.getUTCHours()).padStart(2, '0');
    const minutes = String(time.getUTCMinutes()).padStart(2, '0');
    const seconds = String(time.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(time.getUTCMilliseconds()).padStart(3, '0');
    display.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}
