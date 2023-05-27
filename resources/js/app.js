// import './bootstrap';
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


let formdata = document.getElementById('formdata');
let form_budu = document.getElementById('form_budu');
let form_ne_budu = document.getElementById('form_ne_budu');
let form_one = document.getElementById('form_one');
let form_plusone = document.getElementById('form_plusone');
let para = document.getElementById('para');
let para_field = document.getElementById('para_field');

formdata.onchange = function () {
    form_one.disabled = true;
    form_plusone.disabled = true;
    form_one.required = false;
    form_plusone.required = false;
    if (formdata.rsvp.value === 'Точно буду') {
        form_one.disabled = false;
        form_plusone.disabled = false;
        form_one.required = true;
        form_plusone.required = true;
    }

    para.classList.add('hidden');
    para_field.required = false;
    if (formdata.count.value === 'Буду с парой') {
        para.classList.remove('hidden');
        para_field.required = true;
    }
}

// form_budu.onchange = function () {
//     form_one.required = true;
//     form_plusone.required = true;
// }
// form_ne_budu.onchange = function () {
//     form_one.required = false;
//     form_plusone.required = false;
//     para.classList.add('hidden');
//     para_field.required = false;
// }
// form_one.onchange = function () {
//     para.classList.add('hidden');
//     para_field.required = false;
// }
// form_plusone.onchange = function () {
//     para.classList.remove('hidden');
//     para_field.required = true;
// }
