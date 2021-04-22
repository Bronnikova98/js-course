//  Задание 1
const out1 = document.querySelector('.out-1');
function f1() {
    out1.style.width = '200px';
    out1.style.height = '40px';
}
document.querySelector('.b-1').onclick = f1;
//  Задание 2
let out2 = document.querySelector('.out-2');
function f2() {
    out2.classList.add('bg-2');
}
document.querySelector('.b-2').onclick = f2;
//  Задание 3
let out3 = document.querySelector('.out-3');
function f3() {
    out3.classList.remove('bg-3');
}
document.querySelector('.b-3').onclick = f3;
//  Задание 4
let out4 = document.querySelector('.out-4');
function f4() {
    out4.classList.toggle('bg-4');
}
document.querySelector('.b-4').onclick = f4;
//  Задание 5
let out5 = document.querySelector('.out-5');
function f5() {
    if (out4.classList.contains('bg-4')) {
        out5.innerHTML = true;
    }
    else {
        out5.innerHTML = false;
    }
}
document.querySelector('.b-5').onclick = f5;
//  Задание 6
let par = document.getElementsByClassName('p-6').length;
function f6() {
    document.querySelector('.out-6').innerHTML = par;
}
document.querySelector('.b-6').onclick = f6;
//  Задание 7
let blocks7 = document.querySelectorAll('.out-7');
let blocklen7 = document.getElementsByClassName('out-7').length;
function f7() {
    for (let i = 0; i < blocklen7; i++) {
        blocks7[i].classList.add('bg-7');
    }
}
document.querySelector('.b-7').onclick = f7;
//  Задание 8
let blocks8 = document.querySelectorAll('.out-8');
let blocklen8 = document.getElementsByClassName('out-8').length;
function f8() {
    for (let i = 0; i < blocklen8; i++) {
        blocks8[i].classList.toggle('bg-7');
    }
}
document.querySelector('.b-8').onclick = f8;
//  Задание 9
function f9() {
    this.classList.add('bg-9');
}
let div9 = document.querySelectorAll('.out-9');
for (let i = 0; i < div9.length; i++) {
    div9[i].onclick = f9;
}
//  Задание 10
let div10 = document.querySelectorAll('.out-10');
function f10() {
    this.classList.toggle('bg-10');
}
for (let i = 0; i < div10.length; i++) {
    div10[i].onclick = f10;
}
//  Задание 11
function f11() {
    let d = document.createElement('div');
    d.innerHTML = 25;
    document.querySelector('.out-11').append(d);
}
document.querySelector('.b-11').onclick = f11;
//  Задание 12
function f12() {
    let c = document.createElement('div');
    c.innerHTML = 12;
    c.classList.add('bg-12');
    document.querySelector('.out-12').append(c);
}
document.querySelector('.b-12').onclick = f12;
//  Задание 13
function f13() {
    let e = document.createElement('div');
    e.innerHTML = 'pushMe';
    e.classList.add('bg-13');
    e.onclick = f13_1;
    document.querySelector('.out-13').append(e);
}
function f13_1() {
    document.querySelector('.out-13-1').innerHTML += this.innerHTML;
}
document.querySelector('.b-13').onclick = f13;
//  Задание 14
function f14() {
    let p = document.createElement('div');
    p.innerHTML = 14;
    p.classList.add('bg-14');
    document.querySelector('.out-14').prepend(p);
}
document.querySelector('.b-14').onclick = f14;
//  Задание 15
function f15() {
    let g = document.createElement('div');
    g.innerHTML = 15;
    g.classList.add('bg-15');
    document.querySelector('.out-15').before(g);
}
document.querySelector('.b-15').onclick = f15;
//  Задание 16
function f16() {
    let s = document.createElement('div');
    s.innerHTML = 16;
    s.classList.add('bg-16');
    document.querySelector('.out-16').after(s);
}
document.querySelector('.b-16').onclick = f16;
//  Задание 17
function f17() {
    let r = document.createElement('div');
    r.innerHTML = 17;
    r.classList.add('bg-17');
    document.querySelector('.out-17').replaceWith(r);
}
document.querySelector('.b-17').onclick = f17;
//  Задание 18
// Добавьте кнопку .b-18, которая запускает функцию f18. Функция с помощью getAttribute получает data-b атрибут с параграф p-18 и выводит в out-18.
let att = document.querySelector('.p-18');
function f18() {
    document.querySelector('.out-18').innerHTML = att.getAttribute('data-b');
}
document.querySelector('.b-18').onclick = f18;
//  Задание 19
let out19 = document.querySelector('.out-19');
let atts = document.querySelectorAll('.p-19');
function f19() {
    for (let i = 0; i < atts.length; i++) {
        out19.innerHTML += atts[i].getAttribute('data-b') + ' ';
    }
}
document.querySelector('.b-19').onclick = f19;
//  Задание 20
let out20 = document.querySelector('.out-20');
function f20() {
    out20.setAttribute("title", "go");
}
document.querySelector('.b-20').onclick = f20;