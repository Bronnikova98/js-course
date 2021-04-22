// Задание 1
let input1 = document.querySelector('.i-1');
function f1() {
    let i = +input1.value;
    if (i == 4) {
        document.querySelector('.out-1').innerHTML = 'Введено число 4';
    }
    else {
        document.querySelector('.out-1').innerHTML = 'Введено число не равное 4';
    }
}
document.querySelector('.b-1').onclick = f1;
// Задание 2
let a21 = 45;
let a22 = 32;
function f2() {
    if (a21 > a22) {
        document.querySelector('.out-2').innerHTML = a21;
    }
    else {
        document.querySelector('.out-2').innerHTML = a22;
    }
}
document.querySelector('.b-2').onclick = f2;
// Задание 3
let input31 = document.querySelector('.i-31');
let input32 = document.querySelector('.i-32');
function f3() {
    let i31 = +input31.value;
    let i32 = +input32.value;
    if (i31 == i32) {
        document.querySelector('.out-3').innerHTML = 'Числа равны';
    }
    else {
        if (i31 > i32) {
            document.querySelector('.out-3').innerHTML = i31;
        }
        else {
            document.querySelector('.out-3').innerHTML = i32;
        }
    }
}
document.querySelector('.b-3').onclick = f3;
// Задание 4.
let input4 = document.querySelector('.i-4');
function f4() {
    let i4 = +input4.value;
    if (i4 >= 18) {
        document.querySelector('.out-4').innerHTML = 1;
    }
    else {
        document.querySelector('.out-4').innerHTML = 0;
    }
}
document.querySelector('.b-4').onclick = f4;
// Задание 5.
let input5 = document.querySelector('.i-5');
function f5() {
    let i5 = +input5.value;
    if (i5 < 0) {
        document.querySelector('.out-5').innerHTML = 'm';
    }
    else {
        if (i5 == 0) {
            document.querySelector('.out-5').innerHTML = 0;
        }
        else {
            if (i5 > 0) {
                document.querySelector('.out-5').innerHTML = 1;
            }
        }
    }
}
document.querySelector('.b-5').onclick = f5;
// Задание 6.
let input6 = document.querySelector('.i-6');
function f6() {
    let i6 = input6.value;
    if (i6 % 2 == 0) {
        document.querySelector('.out-6').innerHTML = 'even';
    }
    else {
        document.querySelector('.out-6').innerHTML = 'odd';
    }
}
document.querySelector('.b-6').onclick = f6;
// Задание 7.
let input71 = document.querySelector('.i-71');
let input72 = document.querySelector('.i-72');
function f7() {
    let i71 = input71.value;
    let i72 = input72.value;
    let st = Math.pow(i71, i72);
    document.querySelector('.out-7').innerHTML = st;
}
document.querySelector('.b-7').onclick = f7;
// Задание 8.
let s8 = document.querySelector('.s-8');
function f8() {
    let s = s8.value;
    switch (s) {
        case '1': document.querySelector('.out-8').innerHTML = 'one';
            break;
        case '2': document.querySelector('.out-8').innerHTML = 'two';
            break;
        case '3': document.querySelector('.out-8').innerHTML = 'three';
            break;
    }
}
document.querySelector('.b-8').onclick = f8;
// Задание 9
let input9 = document.querySelector('.i-9');
function f9() {
    let apart = +input9.value;
    switch (true) {
        case (apart >= 1 && apart <= 32): document.querySelector('.out-9').innerHTML = 1;
            break;
        case (apart >= 33 && apart <= 43): document.querySelector('.out-9').innerHTML = 2;
            break;
        case (apart >= 44 && apart <= 64): document.querySelector('.out-9').innerHTML = 3;
            break;
        default: document.querySelector('.out-9').innerHTML = 0;
            break;
    }
}
document.querySelector('.b-9').onclick = f9;
// Задание 10
let s100 = document.querySelector('.s-100');
function f10() {
    let ches = s100.value;
    switch (ches) {
        case '6': default: document.querySelector('.out-10').innerHTML = ches;
            break;
        case '7': document.querySelector('.out-10').innerHTML = ches;
            break;
        case '11': document.querySelector('.out-10').innerHTML = ches;
            break;
        case '9': document.querySelector('.out-10').innerHTML = ches;
            break;
    }
}
document.querySelector('.b-10').onclick = f10;
// Задание 11
let s110 = document.querySelector('.s-110');
function f11() {
    let onch = s110.value;
    document.querySelector('.out-11').innerHTML = onch;
}
document.querySelector('.s-110').onchange = f11;
// Задание 12
let input120 = document.querySelector('.i-120');
function f12() {
    let v = input120.value;
    document.querySelector('.out-12').innerHTML = (typeof v);
}
document.querySelector('.b-12').onclick = f12;
// Задание 13
let input130 = document.querySelector('.i-130');
function f13() {
    let t = input130.value;// Здесь значение принимается как строка
    document.querySelector('.out-13').innerHTML = (typeof t);
}
document.querySelector('.b-13').onclick = f13;
// Задание 14
let input141 = document.querySelector('.i-141');
let input142 = document.querySelector('.i-142');
let sel143 = document.querySelector('.s-143');
function f14() {
    let i141 = +input141.value;
    let i142 = +input142.value;
    let s143 = sel143.value;
    switch (s143) {
        case '+': document.querySelector('.out-14').innerHTML = i141 + i142;
            break;
        case '-': document.querySelector('.out-14').innerHTML = i141 - i142;
            break;
        case '*': document.querySelector('.out-14').innerHTML = i141 * i142;
            break;
        case '/': document.querySelector('.out-14').innerHTML = i141 / i142;
            break;
    }
}
document.querySelector('.b-14').onclick = f14;
// Задание 15
let sel151 = document.querySelector('.s-151');
let sel152 = document.querySelector('.s-152');
let sel153 = document.querySelector('.s-153');
function f15() {
    let s151 = sel151.value;
    let s152 = sel152.value;
    let s153 = sel153.value;
    let sw1;
    let sw2;
    switch (s151) {
        case '1': document.querySelector('.out-15').innerHTML = sw1 = 1;
            break;
        case '0': document.querySelector('.out-15').innerHTML = sw1 = 0;
            break;
    }
    switch (s152) {
        case '1': document.querySelector('.out-15').innerHTML = sw2 = 1;
            break;
        case '0': document.querySelector('.out-15').innerHTML = sw2 = 0;
            break;
    }
    switch (s153) {
        case '&&':
            if (sw1 == 0 && sw2 == 0) {
                document.querySelector('.out-15').innerHTML = 0;
            }
            else {
                if (sw1 == 0 && sw2 == 1 || sw1 == 1 && sw2 == 0) {
                    document.querySelector('.out-15').innerHTML = 0;
                }
                else {
                    if (sw1 == 1 && sw2 == 1) {
                        document.querySelector('.out-15').innerHTML = 1;
                    }
                }
            }
            break;
        case '||':
            if (sw1 == 0 && sw2 == 0) {
                document.querySelector('.out-15').innerHTML = 0;
            }
            else {
                if (sw1 == 0 && sw2 == 1 || sw1 == 1 && sw2 == 0) {
                    document.querySelector('.out-15').innerHTML = 1;
                }
                else {
                    if (sw1 == 1 && sw2 == 1) {
                        document.querySelector('.out-15').innerHTML = 1;
                    }
                }
            }
            break;
    }
} document.querySelector('.b-15').onclick = f15;