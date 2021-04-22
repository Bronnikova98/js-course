//  Задание 1
function t1() {
    let a = '';
    for (let i = 1; i <= 50; i++) {
        a += i + ' ';
    }
    document.querySelector('.out-1').innerHTML = a;
}
document.querySelector('.b-1').onclick = t1;
//  Задание 2
function t2() {
    let b = '';
    for (let i = 2; i <= 122; i = i + 2) {
        b += i + ' ';
    }
    document.querySelector('.out-2').innerHTML = b;
}
document.querySelector('.b-2').onclick = t2;
//  Задание 3
function t3() {
    let c = '';
    for (let i = 25; i >= 7; i--) {
        c += i + ' ';
    }
    document.querySelector('.out-3').innerHTML = c;
}
document.querySelector('.b-3').onclick = t3;
//  Задание 4
function t4() {
    let d = '';
    for (let i = 77; i >= 35; i = i - 3) {
        d += i + '_';
    }
    document.querySelector('.out-4').innerHTML = d;
}
document.querySelector('.b-4').onclick = t4;
//  Задание 5
function t5() {
    let e = '';
    for (let i = 1; i <= 17; i++) {
        if (i % 2 == 0) {
            e += i + '_**';
        }
        else {
            e += i + '_*';
        }
    }
    document.querySelector('.out-5').innerHTML = e;
}
document.querySelector('.b-5').onclick = t5;
//  Задание 6
let i6 = document.querySelector('.i-6');
function t6() {
    let f = '';
    for (let i = 0; i < i6.value; i++) {
        f += '******<br>';

    }
    document.querySelector('.out-6').innerHTML = f;
}
document.querySelector('.b-6').onclick = t6;
//  Задание 7
let input7 = document.querySelector('.i-7');
function t7() {
    let g = '';
    for (let i = input7.value; i >= 0; i--) {
        g += i + " ";
    }
    document.querySelector('.out-7').innerHTML = g;
}
document.querySelector('.b-7').onclick = t7;
//  Задание 8
let input81 = document.querySelector('.i-81');
let input82 = document.querySelector('.i-82');
function t8() {
    if (input82.value > input81.value) {
        let h = '';
        for (let i = input81.value; i <= input82.value; i++) {
            h += i + " ";
        }
        document.querySelector('.out-8').innerHTML = h;
    }
    else {
        document.querySelector('.out-8').innerHTML = 0;
    }
}
document.querySelector('.b-8').onclick = t8;
//  Задание 9
let input91 = document.querySelector('.i-91');
let input92 = document.querySelector('.i-92');
function t9() {
    let k = '';
    if (input92.value > input91.value) {
        for (let i = input91.value; i <= input92.value; i++) {
            k += i + " ";
        }
        document.querySelector('.out-9').innerHTML = k;
    }
    else {
        for (let i = input92.value; i <= input91.value; i++) {
            k += i + " ";
        }
        document.querySelector('.out-9').innerHTML = k;
    }
}
document.querySelector('.b-9').onclick = t9;
//  Задание 10
function t10() {
    let l = '';
    for (let i = 1950; i <= 2000; i = i + 2) {
        l += i + " ";
    }
    document.querySelector('.out-10').innerHTML = l;
}
document.querySelector('.b-10').onclick = t10;
//  Задание 11
function t11() {
    let n = '';
    let m = document.getElementsByClassName('div-11');
    for (let i = 0; i < m.length; i++) {
        n += m[i].innerHTML + " ";
    }
    document.querySelector('.out-11').innerHTML = n;
}
document.querySelector('.b-11').onclick = t11;
//  Задание 12
function t12() {
    let z = document.getElementsByClassName('div-12');
    for (let i = 0; i < z.length; i++) {
        z[i].style.background = 'orange';
    }
}
document.querySelector('.b-12').onclick = t12;
//  Задание 13
function t13() {
    let u = document.getElementsByClassName('i-13');
    for (let i = 0; i < u.length; i++) {
        u[i].value = i + 1;
    }
}
document.querySelector('.b-13').onclick = t13;
//  Задание 14
function t14() {
    let h = '';
    let o = document.getElementsByClassName('i-14');
    for (let i = 0; i < o.length; i++) {
        if (o[i].checked) {
            h += o[i].value;
        }
    }
    document.querySelector('.out-14').innerHTML = h;
}
document.querySelector('.b-14').onclick = t14;
//  Задание 15
function t15() {
    let s = '';
    for (let i = 0; i <= 10; i++) {
        s += (10 - i) + ' ' + i + ' ';
    }
    document.querySelector('.out-15').innerHTML = s;
}
document.querySelector('.b-15').onclick = t15;