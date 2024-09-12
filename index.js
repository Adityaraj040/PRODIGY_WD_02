let timerInterval;
let seconds = 0;
let isRunning = false;

function updateDisplay() {
    const display = document.getElementById('display');
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

document.getElementById('start').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

document.getElementById('pause').addEventListener('click', () => {
    isRunning = false;
    clearInterval(timerInterval);
});

document.getElementById('reset').addEventListener('click', () => {
    isRunning = false;
    clearInterval(timerInterval);
    seconds = 0;
    updateDisplay();
    document.getElementById('laps').innerHTML = '';
});

document.getElementById('lap').addEventListener('click', () => {
    if (isRunning) {
        const lapTime = document.createElement('div');
        lapTime.textContent = `Lap: ${document.getElementById('display').textContent}`;
        document.getElementById('laps').appendChild(lapTime);
    }
});
