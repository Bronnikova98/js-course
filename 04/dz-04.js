// Задание 1.
function f1() {
    alert('Задание 1');
}
document.querySelector('.b-1').onclick = f1;
// Задание 2.
function f2() {
    alert('Задание 2');
}
document.querySelector('.b-2').onclick = f2;
// Задание 3.
function f3() {
    alert('Задание 3');
}
document.querySelector('.p-3').onclick = f3;
// Задание 4.
let checkbox4 = document.querySelector('.i-4');
function f4() {
    if (checkbox4.checked) {
        document.querySelector('.out-4').innerHTML = 'true';
    }
    else {
        document.querySelector('.out-4').innerHTML = 'false';
    }
}
document.querySelector('.b-4').onclick = f4;
// Задание 5.
let checkbox5 = document.querySelector('.i-5');
function f5() {
    let chek5 = checkbox5.value;
    if (checkbox5.checked) {
        document.querySelector('.out-5').innerHTML = chek5;
    }
    else {
        document.querySelector('.out-5').innerHTML = 'false';
    }
}
document.querySelector('.b-5').onclick = f5;
// Задание 6. 
let hid6 = document.querySelector('.i-6');
function f6() {
    document.querySelector('.out-6').innerHTML = hid6.value;
}
document.querySelector('.b-6').onclick = f6;
// Задание 7.
let input7 = document.querySelector('.i-7');
function f7() {
    let pass7 = input7.value;
    document.querySelector('.out-71').innerHTML = pass7;
    if (pass7.length >= 6) {
        document.querySelector('.out-72').innerHTML = 1;
    }
    else {
        document.querySelector('.out-72').innerHTML = 0;
    }
}
document.querySelector('.b-7').onclick = f7;
// Задание 8.
function f8() {
    document.querySelector('.out-8').innerHTML = ('<div class="form-control">Input i-81 <input class="i-81"></div>');
    document.querySelector('.out-8').innerHTML += ('<button class="button b-81">Task-81</button>');

    function f81() {
        document.querySelector('.out-81').innerHTML = document.querySelector('.i-81').value;
    }
    document.querySelector('.b-81').onclick = f81;
}
document.querySelector('.b-8').onclick = f8;
// Задание 9.
let rad9 = document.querySelector('.r-9');
function f9() {
    if (rad9.checked) {
        document.querySelector('.out-9').innerHTML = rad9.value;
    }
    else {
        document.querySelector('.out-9').innerHTML = 0;
    }
}
document.querySelector('.b-9').onclick = f9;
// Задание 10.
function f10() {
    document.querySelector('.out-10').style.background = document.querySelector('.i-10').value;
}
document.querySelector('.b-10').onclick = f10;
// Задание 11.
function f11() {
    document.querySelector('.i-112').value = document.querySelector('.i-111').value;
}
document.querySelector('.b-11').onclick = f11;
// Задание 12.
function f12() {
    document.querySelector('.out-12').innerHTML = document.querySelector('.i-12').value;
}
document.querySelector('.b-12').onclick = f12;
// Задание 13.
function f13() {
    document.querySelector('.out-13').innerHTML = document.querySelector('.i-13').value;
}
document.querySelector('.i-13').oninput = f13;
// Задание 14.
function f14() {
    document.querySelector('.out-14').innerHTML = document.querySelector('.t-14').value;
}
document.querySelector('.b-14').onclick = f14;
// Задание 15.
function f15() {
    document.querySelector('.out-15').innerHTML = document.querySelector('.t-15').value = document.querySelector('.i-15').value;
}
document.querySelector('.b-15').onclick = f15;
// Задание 16.
function f16() {
    document.querySelector('.out-16').innerHTML = document.querySelector('.s-16').value;
}
document.querySelector('.b-16').onclick = f16;
// Задание 17.
function f17() {
    document.querySelector('.out-17').innerHTML = document.querySelector('.s-17').value;
}
document.querySelector('.s-17').onchange = f17;
// Задание 18.
function f18() {
    document.querySelector('.i-18').value = document.querySelector('.s-18').value;
}
document.querySelector('.s-18').onchange = f18;
// Задание 19.
function f19() {
    document.querySelector('.out-19').innerHTML = (document.querySelector('.i-191').value + ' ' + document.querySelector('.i-192').value);
}
document.querySelector('.b-19').onclick = f19;
// Задание 20.
//console.log(form.elements);
//console.log(form.elements['username'].value);

function f20(event) {
    event.preventDefault(); // чтобы форма не перезагружала страницу!!!!
    let form = document.querySelector('.f-20');
    document.querySelector('.out-20').innerHTML = (form.elements['username'].value + ' ' + form.elements['password'].value);
}
document.querySelector('.b-20').onclick = f20;