// Задание 1.
let a = 7;
let b = 9;
console.log(a * b);
// Задание 2.
let c = 7;
let d = 9;
document.querySelector('.out-2').textContent = c / d;
// Задание 3.
let e = 3;
let f = 5;
document.querySelector('.out-3').textContent = e + f;
// Задание 4.
let e1 = '3';
let f1 = 5;
document.querySelector('.out-4').textContent = e1 + f1;
// Задание 5.
let e2 = 3;
let f2 = 0;
document.querySelector('.out-5').textContent = e2 / f2;
// Задание 6.
let e3 = 3;
let f3 = 'Hello';
document.querySelector('.out-6').textContent = e3 + f3;
// Задание 7.
let e4 = 3;
let f4 = 'Hello';
document.querySelector('.out-7').textContent = e4 * f4;
// Задание 8.
let input1 = document.querySelector('.i-8');
function t8() {
    console.log(input1.value);
}
document.querySelector('.b-8').onclick = t8;
// Задание 9.
let input2 = document.querySelector('.i-9')
function t9() {
    document.querySelector('.out-9').innerHTML = input2.value;
    input2.value = '';
}
document.querySelector('.b-9').onclick = t9;
// Задание 10.
let input3 = document.querySelector('.i-10')
function t10() {
    document.querySelector('.out-10').innerHTML = input3.value * 10;
}
document.querySelector('.b-10').onclick = t10;
// Задание 11.
let input4 = document.querySelector('.i-11')
function t11() {
    document.querySelector('.out-11').innerHTML = input4.value;
    let b = input4.value;
    document.querySelector('.out-11').innerHTML = b + 10;
}
document.querySelector('.b-11').onclick = t11;
// Задание 12.
let input5 = document.querySelector('.i-12_1');
let input6 = document.querySelector('.i-12_2');
function t12() {
    document.querySelector('.out-12').innerHTML = 'Hello, ' + input5.value + ' ' + input6.value;
}
document.querySelector('.b-12').onclick = t12;
// Задание 13.
let input7 = document.querySelector('.i-13_1');
let input8 = document.querySelector('.i-13_2');
function t13() {
    let var1 = +input7.value;
    let var2 = +input8.value;
    let sum = var1 + var2;
    document.querySelector('.out-13').innerHTML = sum;
}
document.querySelector('.b-13').onclick = t13;
// Задание 14.
document.querySelector('.i-14').value = 'Hello';
// Задание 15.
let y = document.querySelector('.i-15');
y.style.border = '2px solid red';
// Задание 16.
let input9 = document.querySelector('.i-16-1');
let input10 = document.querySelector('.i-16-2');
function t16() {
    let var3 = +input9.value;
    let var4 = +input10.value;
    document.querySelector('.out-16').innerHTML = var3 + var4;
}
document.querySelector('.b-16').onclick = t16;
// Задание 17.
function t17() {
    let input11 = document.querySelector('.i-17');
    let t = input11.value;
    t = parseInt(t);
    document.querySelector('.out-17').innerHTML = t;
}
document.querySelector('.b-17').onclick = t17;
// Задание 18.
function t18() {
    let input12 = document.querySelector('.i-18');
    let t = input12.value;
    t = parseFloat(t);
    document.querySelector('.out-18').innerHTML = t;
}
document.querySelector('.b-18').onclick = t18;
// Задание 19.
function t19() {
    let input13 = document.querySelector('.i-19-1');
    let input14 = document.querySelector('.i-19-2');
    let t13 = +input13.value;
    t13 = parseInt(t13);
    let t14 = +input14.value;
    t14 = parseInt(t14);
    document.querySelector('.out-19').innerHTML = t13 + t14;
}
document.querySelector('.b-19').onclick = t19;
// Задание 20
let input15 = document.querySelector('.i-20-1');
let input16 = document.querySelector('.i-20-2');
let input17 = document.querySelector('.i-20-3');
let input18 = document.querySelector('.i-20-4');
function t20() {
    t15 = input15.value;
    t16 = input16.value;
    t17 = +input17.value;
    t18 = input18.value;
    document.querySelector('.out-20').innerHTML = 'Уважаемый(ая) ' + t15 + ' ' + t16 + ', ваш возраст ' + t17 + ' года, по професси вы - ' + t18;
}
document.querySelector('.b-20').onclick = t20;