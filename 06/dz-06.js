//  Задача 1
function t1() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.querySelector('.out-1').innerHTML += '*';
        }
        document.querySelector('.out-1').innerHTML += '_';
    }
}
document.querySelector('.b-1').onclick = t1;
//  Задача 2
function t2() {
    for (let i = 0; i < 3; i++) {
        document.querySelector('.out-2').innerHTML += i + 1 + '<br>';
        for (let j = 0; j < 1; j++) {
            document.querySelector('.out-2').innerHTML += '*_*_*_';
            document.querySelector('.out-2').innerHTML += '<br>';
        }
    }
}
document.querySelector('.b-2').onclick = t2;
//  Задача 3
function t3() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 1; j++) {
            document.querySelector('.out-3').innerHTML += '*_*_*_';
        }
        document.querySelector('.out-3').innerHTML += '<br>';
    }
}
document.querySelector('.b-3').onclick = t3;
//  Задача 4
function t4() {
    for (let i = 0; i < 3; i++) {
        document.querySelector('.out-4').innerHTML += i + 1 + '_';
        for (let j = 0; j < 1; j++) {
            document.querySelector('.out-4').innerHTML += '1 2 3 4 5 ';
        }
    }
}
document.querySelector('.b-4').onclick = t4;
//  Задача 5
function t5() {
    for (let i = 0; i < 3; i++) {
        document.querySelector('.out-5').innerHTML += '<br>';
        for (let j = 0; j < 6; j++) {
            if (j % 2 == 0) {
                document.querySelector('.out-5').innerHTML += 1;
            }
            else {
                document.querySelector('.out-5').innerHTML += 0;
            }
        }
    }
}
document.querySelector('.b-5').onclick = t5;
//  Задача 6
function t6() {
    for (let i = 0; i < 3; i++) {
        document.querySelector('.out-6').innerHTML += '<br>';
        for (let j = 0; j < 6; j++) {
            if (j == 0 || j == 4) {
                document.querySelector('.out-6').innerHTML += 1;
            }
            else {
                if (j == 1 || j == 3) {
                    document.querySelector('.out-6').innerHTML += 0;
                }
                else {
                    document.querySelector('.out-6').innerHTML += 'x';
                }
            }
        }
    }
}
document.querySelector('.b-6').onclick = t6;
//  Задача 7
function t7() {
    for (let i = 0; i < 5; i++) {
        document.querySelector('.out-7').innerHTML += '<br>';
        for (let j = 0; j < i; j++) {
            document.querySelector('.out-7').innerHTML += '*';
        }
    }
}
document.querySelector('.b-7').onclick = t7;
//  Задача 8
function t8() {
    for (let i = 5; i > 0; i--) {
        document.querySelector('.out-8').innerHTML += '<br>';
        for (let j = 0; j < i; j++) {
            document.querySelector('.out-8').innerHTML += '*';
        }
    }
}
document.querySelector('.b-8').onclick = t8;
//  Задача 9
function t9() {
    for (let i = 0; i < 6; i++) {
        document.querySelector('.out-9').innerHTML += '<br>';
        for (let j = 0; j < i; j++) {
            document.querySelector('.out-9').innerHTML += (1 + j * 1) + ' ';
        }
    }
}
document.querySelector('.b-9').onclick = t9;
//  Задача 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>
function t10() {
    let a = 1;
    for (let i = 0; i < 5; i++) {
        document.querySelector('.out-10').innerHTML += '<br>';
        for (let j = 0; j < 10; j++) {
            if (a < 9) {
                document.querySelector('.out-10').innerHTML += '0' + a + ' ';
                a++;
            }
            else {
                document.querySelector('.out-10').innerHTML += a + ' ';
                a++;
            }
        }
    }
}

document.querySelector('.b-10').onclick = t10;