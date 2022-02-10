const body = document.querySelector('body');
const minuts = document.querySelector('.timer__minuts').querySelector('span');
const seconds = document.querySelector('.timer__seconds').querySelector('span');
const milliseconds = document.querySelector('.timer__milliseconds');
const onOff = document.querySelector('.start');
const restart = document.querySelector('.restart');
const changeTheme = document.querySelector('.change-theme');
const timer = document.querySelector('.timer');

const stopwatch = class {
    #timer;
    constructor() {
        body.addEventListener('click', this.timerStart.bind(this));
        restart.addEventListener('click', this.reStart.bind(this));
        changeTheme.addEventListener('click', this.changeDarkLight);
    }

    timerStart(e) {
        if (this.onOrOff()) return;
        this.#timer = setInterval(this.countDown.bind(this), 10);

    }

    onOrOff() {
        if (onOff.textContent.includes('stop')) {
            onOff.textContent = 'tap to start';
            clearInterval(this.#timer);
            return true;
        }
        else onOff.textContent = "tap to stop";
    }

    countDown() {
        milliseconds.textContent = `${+milliseconds.textContent + 1}`.padStart(2, '0');
        if (milliseconds.textContent === '100') {
            seconds.textContent = `${+seconds.textContent + 1}`.padStart(2, '0');
            milliseconds.textContent = "00";
        }
        if (seconds.textContent === '59') {
            console.log(minuts.textContent);
            minuts.textContent = `${+minuts.textContent + 1}`.padStart(2, '0');
            seconds.textContent = "00";
        }
    }
    reStart(e) {
        e.preventDefault();
        e.stopPropagation();
        onOff.textContent = 'tap to start';
        minuts.textContent = "00";
        seconds.textContent = "00";
        milliseconds.textContent = "00";
        if (this.#timer) clearInterval(this.#timer);

    }

    changeDarkLight(e) {
        e.preventDefault();
        e.stopPropagation();
        body.classList.toggle('light');
        changeTheme.classList.toggle('change-theme__light');
        restart.classList.toggle('restart__light');
        onOff.classList.toggle('start__light');
        timer.classList.toggle('timer__light');
    }

};


const app = new stopwatch();