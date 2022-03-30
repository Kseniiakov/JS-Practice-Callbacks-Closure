"use strict";

// Функция-колбэк
// 1) Создайте функцию с двумя параметрами:
// первый принимает число,
// второй принимает функцию-колбэк.
// Функцию колбэк вызвать и передать ей число.

// const myCallback = (a) => {
//     const squared = a*a;
//     return squared;
// };

// function myFunc(num, callback){
//     const resultCallback = callback(num);
//     const resultText = `${resultCallback} это квадрат числа ${num}`
//     return resultText;
// }

// const result = myFunc(5, myCallback);
// console.log(result);

// 2) Создайте функцию которая принимает массив, и функцию-колбэк
// Вызовите функцию-колбэк столько раз сколько ячеек в массиве.

// const myCallback = (a) => {
//     const squared = a*a;
//     return squared;
// };

// function myFunc(arr, callback) {
//     for(let i = 0; i < arr.length; i++) {
//         const resultCallback = callback(arr[i]);
//         console.log(resultCallback);
//     };
// };

// myFunc([1,2,3,4,5,6,7,8,9,10], myCallback);

// 3) Создайте функцию которая принимает:
// массив,
// число,
// функцию-колбэк.
// Найдите число в массиве, если нашли то вызовите функцию-колбэк.

// const myCallback = (a) => {
//     const result = a+a;
//     return result;
// }

// function findNumber(arr, num, callback) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === num) {
//             const resultCallback = callback(arr[i]);
//             return resultCallback;
//         }
//     };
// };

// const resultFunc = findNumber([1,2,3,4,5,6,7,8, 88, 9,10],88, myCallback);
// console.log(resultFunc);

// 4) * Реализуйте функцию map используя параметры: массив, 
// функцию-колбэк. Возвращает новый массив состоящий из значений 
// полученных  в результате вызова колбэка.

// const myArr = [10,12,14,16,18,20];

// const myCallback = (elem) => {
//     const result = elem/2;
//     return result;
// };

// function myMap(arr, callback) {
//     const newArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         const resultCallback = callback(arr[i]);
//         newArr.push(resultCallback);
//     }
//     return newArr;
// }

// const result = myMap(myArr, myCallback);
// console.log(result);

// 5) * Реализуйте функцию filter, которая принимает массив 
// и функцию-колбэк. Возвращает новый массив в который помещает
// только элементы прошедшие проверку через колбэк (вернул true)

// const myArr = [1,2,3,4,5,6];

// const myCallback = (elem) => {
//     if(elem % 2 === 0) {
//         return elem;
//     }
// };

// function myMap(arr, callback) {
//     const newArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         const resultCallback = callback(arr[i]);
//         if(resultCallback !== undefined) {
//             newArr.push(resultCallback);
//         }
//     }
//     return newArr;
// }

// const result = myMap(myArr, myCallback);
// console.log(result);

// Замыкание
// 4) Создайте функцию outer.
// Внутри создайте переменную с числом, и функцию closure.
// Внутри функции closure логируйте переменную.
// Функцию closure верните как return значение функции outer.
// Вызовите функцию outer, получите результат значение в переменную.
// И вызовите полученную функцию.

// function outer() {
//     const num = 5;
//     function closure() {
//         console.log(num);
//     };
//     return closure;
// };

// const myFunc = outer();

// myFunc();


// Почему логируется число в консоль?
// Ответ: потому, что функция outer возвращает функцию closure которая логирует число.

// Разве переменные не удаляются после завершения функции outer?
// Ответ: переменные удаляются после завершения функции outer, 
// но переменная num используется в функции closure, а значит находится в замыкании и поэтому хранится в памяти.

// Откуда берется значение числа у функции closure?
// Ответ: из внешней для неё области видимости(область видимости функции outer).

// 5) Используйте код предыдущего задания.
// Внутри функции closure перед логированием добавьте операцию изменения переменной
// Например
// value += 10;
// console.log(value)

// function outer() {
//     let num = 5;
//     function closure() {
//         num += 2;
//         console.log(num);
//     };
//     return closure;
// };

// const myFunc = outer();

// myFunc(); // 7
// myFunc(); // 9
// myFunc(); // 11

// Вызовите повторно несколько раз полученное значение из outer.
// Почему при логировании число увеличивается?
// Ответ: Число увеличивается так как операция производится с одной и той же областью памяти по ссылке (myFunc), 
// которая хранит результат произведенных с ней действий.

// Откуда берется значение числа у функции closure?
// Ответ: функция closure берет значение числа из области видимости функции outer(num = 5) и на месте меняет его, 
// поэтому мы видим первый результат не 5 а 7.