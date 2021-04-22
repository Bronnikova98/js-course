//  Задача 1
function t1() {
    let i = 0;
    while (i < 50) {
        i++;
        document.querySelector('.out-1').innerHTML += i + ' ';
    }
}
document.querySelector('.b-1').onclick = t1;
//  Задача 2
function t2() {
    let i = 0;
    while (i < 122) {
        i = i + 2;
        document.querySelector('.out-2').innerHTML += i + ' ';
    }
}
document.querySelector('.b-2').onclick = t2;
//  Задача 3
function t3() {
    let i = 26;
    while (i > 7) {
        i--;
        document.querySelector('.out-3').innerHTML += i + ' ';
    }
}
document.querySelector('.b-3').onclick = t3;
//  Задача 4
function t4() {
    let i = 80;
    while (i > 35) {
        i = i - 3;
        document.querySelector('.out-4').innerHTML += i + '_';
    }
}
document.querySelector('.b-4').onclick = t4;
//  Задача 5
function t5() {
    let i = 0;
    while (i < 17) {
        i++;
        if (i % 2 == 0) {
            document.querySelector('.out-5').innerHTML += i + '_**';
        }
        else {
            document.querySelector('.out-5').innerHTML += i + '_*';
        }
    }
}
document.querySelector('.b-5').onclick = t5;
//  Задача 6
function t6() {
    let input6 = document.querySelector('.i-6');
    let i = 0;
    while (i < input6.value) {
        i++;
        document.querySelector('.out-6').innerHTML += '******<br>';
    }
}
document.querySelector('.b-6').onclick = t6;
//  Задача 7
function t7() {
    let input7 = document.querySelector('.i-7');
    let i7 = input7.value;
    document.querySelector('.out-7').innerHTML += i7 + ' ';
    while (i7 > 0) {
        i7--;
        document.querySelector('.out-7').innerHTML += i7 + ' ';
    }
}
document.querySelector('.b-7').onclick = t7;
//  Задача 8
function t8() {
    let input81 = document.querySelector('.i-81');
    let input82 = document.querySelector('.i-82');
    let i81 = input81.value;
    let i82 = input82.value;
    document.querySelector('.out-8').innerHTML += i81 + ' ';
    while (i81 < i82) {
        i81++;
        document.querySelector('.out-8').innerHTML += i81 + ' ';
    }
}
document.querySelector('.b-8').onclick = t8;
//  Задача 9
function t9() {
    let input91 = document.querySelector('.i-91');
    let input92 = document.querySelector('.i-92');
    let i91 = input91.value;
    let i92 = input92.value;
    if (i91 < i92) {
        document.querySelector('.out-9').innerHTML += i91 + ' ';
        while (i91 < i92) {
            i91++;
            document.querySelector('.out-9').innerHTML += i91 + ' ';
        }
    }
    else {
        document.querySelector('.out-9').innerHTML += i92 + ' ';
        while (i92 < i91) {
            i92++;
            document.querySelector('.out-9').innerHTML += i92 + ' ';
        }
    }
}
document.querySelector('.b-9').onclick = t9;
//  Задача 10
function t10() {
    let i = 1950;
    document.querySelector('.out-10').innerHTML += i + ' ';
    while (i < 2000) {
        i = i + 2;
        document.querySelector('.out-10').innerHTML += i + ' ';
    }
}
document.querySelector('.b-10').onclick = t10;
//  Задача 11
function t11() {
    let n = '';
    let i = -1;
    let m = document.getElementsByClassName('div-11');
    while (i < m.length - 1) {
        i++;
        n += m[i].innerHTML + " ";
    }
    document.querySelector('.out-11').innerHTML = n;
}
document.querySelector('.b-11').onclick = t11;
//  Задача 12
function t12() {
    let z = document.getElementsByClassName('div-12');
    let i = -1;
    while (i < z.length - 1) {
        i++;
        z[i].style.background = 'orange';
    }
}
document.querySelector('.b-12').onclick = t12;
//  Задача 13
function t13() {
    let u = document.getElementsByClassName('i-13');
    let i = -1;
    while (i < u.length - 1) {
        i++;
        u[i].value = i + 1;
    }
}
document.querySelector('.b-13').onclick = t13;
//  Задача 14
function t14() {
    let h = '';
    let o = document.getElementsByClassName('i-14');
    let i = -1;
    while (i < o.length - 1) {
        i++;
        if (o[i].checked) {
            h += o[i].value;
        }
    }
    document.querySelector('.out-14').innerHTML = h;
}
document.querySelector('.b-14').onclick = t14;
//  Задача 15
function t15() {
    let s = '';
    let i = -1;
    while (i < 10) {
        i++;
        s += (10 - i) + ' ' + i + ' ';
    }
    document.querySelector('.out-15').innerHTML = s;
}
document.querySelector('.b-15').onclick = t15;