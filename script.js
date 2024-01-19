let timer;
let isRunning = false;
let seconds = 0;
let laps = [];

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').innerText = 'Start';
    } else {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById('startStop').innerText = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    seconds = 0;
    isRunning = false;
    document.getElementById('display').innerText = '00:00:00';
    document.getElementById('startStop').innerText = 'Start';
    laps = [];
    updateLaps();
}

function lap() {
    laps.push(seconds);
    updateLaps();
}

function updateDisplay() {
    seconds++;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const displaySeconds = seconds % 60;

    document.getElementById('display').innerText = `${pad(hours)}:${pad(minutes)}:${pad(displaySeconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

function updateLaps() {
    const lapsList = document.getElementById('laps');
    lapsList.innerHTML = '';

    laps.forEach((lap, index) => {
        const lapItem = document.createElement('li');
        lapItem.innerText = `Lap ${index + 1}: ${formatTime(lap)}`;
        lapsList.appendChild(lapItem);
    });
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const displaySeconds = seconds % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(displaySeconds)}`;
}

