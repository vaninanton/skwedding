import './bootstrap';
import '../css/app.css';
import './ymaps';
import './canvas';

const countDownDate = new Date('Jul 28, 2023 16:00:00 GMT+03:00').getTime();

let countdown = function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('countdown').innerText = hours + ':' + minutes + ':' + seconds;
    window.requestAnimationFrame(countdown);
};
window.requestAnimationFrame(countdown);



