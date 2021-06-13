//  Task 1
// Кнопка .b-1 запускает функцию t1. Функция должна выводить в .out-1 строку вида:
//     1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_
// Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.

let out1 = document.querySelector('.out-1');

function t1() {
  let out = '';

  for (let i = 1; i < 17; i++) {
    out += i + '_';
  }
  out1.innerHTML = out;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка .b-2 запускает функцию t2. Функция должна выводить в .out-2 строку вида:
// 12_14_16_18_20_ .. 36_38_
//Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.

let out2 = document.querySelector('.out-2');

function t2() {
  let out = '';

  for (let i = 12; i < 39; i = i + 2) {
    out += i + '_';
  }
  out2.innerHTML = out;
}

document.querySelector('.b-2').onclick = t2;

//  Task 3
// Кнопка .b-3 запускает функцию t3. Функция должна выводить в .out-3 строку вида:
//  25_24_23_22_ .. 8_7_
// Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.

let out3 = document.querySelector('.out-3');

function t3() {
  let out = '';

  for (let i = 25; i > 6; i--) {
    out += i + '_';
  }
  out3.innerHTML = out;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка .b-4 запускает функцию t4. Функция должна выводить в .out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.

let out4 = document.querySelector('.out-4');

function t4() {
  let out = '';

  for (let i = 77; i > 34; i = i - 3) {
    out += i + '_';
  }
  out4.innerHTML = out;
}

document.querySelector('.b-4').onclick = t4;

//  Task 5
// Кнопка .b-5 запускает функцию t5. Функция должна выводить в .out-5 строку вида:
// 1_*2_**3_*4_** ..16_**17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла.

let out5 = document.querySelector('.out-5');

function t5() {
  let out = '';

  for (let i = 1; i < 18; i++) {
    if (i % 2) {
      out += i + '_*';
    } else {
      out += i + '_**';
    }

    out5.innerHTML = out;
  }
}

document.querySelector('.b-5').onclick = t5;

//  Task 6
// Кнопка .b-6 запускает функцию t6. Функция должна выводить в .out-6 строку вида:
//
// ******<br>
// ******<br>
// ******<br>
//
//Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек. Перенос строки - br. Количество строк (итераций, повторений) цикла вводит пользователь в i-6.
//

function t6() {
  let i6 = +document.querySelector('.i-6').value;
  let out = '';

  for (let i = 0; i < i6; i++) {
    out += '******<br>';
  }
  document.querySelector('.out-6').innerHTML = out;
}

document.querySelector('.b-6').onclick = t6;

//  Task 7
// Есть input .i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки .b-7 должна запускаться функция t7, которая выводит в .out-7 числа от введенного пользователем до нуля включительно.
// Разделитель - знак подчеркивания. Если пользователь ввел 4 и нажал кнопку, мы получим:
// 4_3_2_1_0_
// Задача решается с помощью цикла.

function t7() {
  let i7 = +document.querySelector('.i-7').value;
  let out = '';
  for (let i = i7; i >= 0; i--) {
    out += i + '_';
  }
  document.querySelector('.out-7').innerHTML = out;
}

document.querySelector('.b-7').onclick = t7;

//  Task 8
// Есть input .i-81 и .i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки .b-8  должна запускаться функция t8, которая выводит в .out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель подчеркивание. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//  4_5_6_7_8_
// Задача решается с помощью цикла.

function t8() {
  let i81 = +document.querySelector('.i-81').value;
  let i82 = +document.querySelector('.i-82').value;
  let out = '';

  for (let i = i81; i <= i82; i++) {
    out += i + '_';
  }

  document.querySelector('.out-8').innerHTML = out;
}

document.querySelector('.b-8').onclick = t8;

//  Task 9
// Есть input .i-91 и .i-92 куда пользователь может ввести числа.
// По нажатию кнопки .b-9 должна запускаться функция t9, которая выводит в .out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель - подчеркивание. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
// 4_5_6_7_8_
// если ввел 8 и 6, то получим
// 6_7_8_
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл.
// цикл - один

function t9() {
  let i91 = +document.querySelector('.i-91').value;
  let i92 = +document.querySelector('.i-92').value;
  let out = '';

  if (i91 < i92) {
    for (let i = i91; i <= i92; i++) {
      out += i + '_';
    }
  } else {
    for (let i = i92; i <= i91; i++) {
      out += i + '_';
    }
  }

  document.querySelector('.out-9').innerHTML = out;
}

document.querySelector('.b-9').onclick = t9;

//  Task 10
// Кнопка .b-10 запускает функцию t10. Функция должна выводить в .out-10 четные годы от 1950 до 1970 включительно.
// Разделитель - знак подчеркивания. Задача решается через цикл, а четность - через шаг (равный 2).

function t10() {
  let out = '';
  for (let i = 1950; i <= 1970; i = i + 2) {
    out += i + '_';
  }
  document.querySelector('.out-10').innerHTML = out;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка .b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11 в переменную divs11
// перебрать их с помощью цикла. Обращение к div выглядит так divs[i].innerHTML
// вывести в .out-11 содержимое каждого блока. Разделитель - знак подчеркивания.
//     В результате должно получиться так:
//     one_3_4_two_

let divs11 = document.querySelectorAll('.div-11');
let out11 = document.querySelector('.out-11');

function t11() {
  let out = '';
  for (let i = 0; i < divs11.length; i++) {
    out += divs11[i].innerHTML + '_';
  }
  out11.innerHTML = out;
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка .b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’

let divs12 = document.querySelectorAll('.div-12');

function t12() {
  for (let i = 0; i < divs12.length; i++) {
    divs12[i].style.background = 'orange';
  }
}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// С помощью цикла присвойте всем input .i-13 value равное 1 для первого, 2 для второго и 3 для третьего.

let i13 = document.querySelectorAll('.i-13');

function t13() {
  for (let i = 0; i < i13.length; i++) {
    i13[i].value = i + 1;
  }
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка .b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// вывести в .out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.

let i14 = document.querySelectorAll('.i-14');
let out14 = document.querySelector('.out-14');

function t14() {
  for (let i = 0; i < i14.length; i++) {
    if (i14[i].checked) {
      out14.innerHTML = i14[i].value;
    }
  }
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка .b-15 запускает функцию t15  Функция должна выводить следующую последовательность в .out-15:
// 10_0_9_1_8_2_7_3_6_4_5_5_4_6_3_7_2_8_1_9_0_10_
// Подсказка (10 - i) + '_' + i + '_'

let out15 = document.querySelector('.out-15');

function t15() {
  let out = '';
  for (let i = 0; i <= 10; i++) {
    out += 10 - i + '_' + i + '_';
  }
  out15.innerHTML = out;
}

document.querySelector('.b-15').onclick = t15;
