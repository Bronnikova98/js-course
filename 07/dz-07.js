// Задание 1
let a1 = 8;
function t1() {
    document.querySelector('.out-1').innerHTML = a1;
}
document.querySelector('.b-1').onclick = t1;
// Задание 2.
let a2 = 8;
function t2() {
    return (a2);
}
document.querySelector('.b-2').onclick = function () {
    document.querySelector('.out-2').textContent = t2();
}
// Задание 3.
function t3(a, b) {
    return (a * b);
}
document.querySelector('.b-3-1').onclick = function () {
    document.querySelector('.out-3-1').textContent = t3(3, 4);
}
document.querySelector('.b-3-2').onclick = function () {
    document.querySelector('.out-3-2').textContent = t3(5, 6);
}
// Задание 4
function t4(year) {
    return (2021 - year);
}
document.querySelector('.b-4').onclick = function () {
    document.querySelector('.out-4').textContent = t4(1998);
}
// Задание 5
function t5(yourName) {
    return ("Hello, " + yourName);
}
document.querySelector('.b-5').onclick = function () {
    document.querySelector('.out-5').textContent = t5('Vika');
}
// Задание 6
function t6(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;// Смотри справочник JS
}
document.querySelector('.b-6').onclick = function () {
    document.querySelector('.out-6').textContent = t6(1, 7);
}
// Задание 7
function t7(r, g, b) {
    return `rgb(${r = t6(0, 255)}, ${g = t6(0, 255)}, ${b = t6(0, 255)})`;
}
document.querySelector('.b-7').onclick = function () {
    document.querySelector('.out-7').style.background = t7();
}
// Задание 8
function t8(str) {
    return (str.trim());
}
document.querySelector('.b-8').onclick = function () {
    document.querySelector('.out-8').textContent = t8('  Hello  ');
}
// Задание 9
// Напишите функцию t9, которая принимает число и возвращает true, если число четное, и false если не четное. 

function t9(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
document.querySelector('.b-9').onclick = function () {
    document.querySelector('.out-9').textContent = t9(15);
}
// Задание 10
function t10(a, b) {
    if (a > b) {
        return a;
    }
    else {
        if (b > a) {
            return b;
        }
        else {
            return a;
        }
    }
}
document.querySelector('.b-10').onclick = function () {
    document.querySelector('.out-10').textContent = t10(3, 9);
}