// IIFE

// 1
// (function () {
//   console.log(`hello`);
// })();

// function consoleHello() {
//   return `hello `;
// }
// function resOfConsoleHello() {
//   return consoleHello() + `world`;
// }
// console.log(resOfConsoleHello());

// res = (function () {
//   let result = `hello world`;
//   return result;
// })();

// console.log(res);

// (function () {
//   let sum = 0;
// })();

// 2
// PURE FUNC
// let arr = [1, 4, 2, 5];
// function couplearrOfArr(arg) {
//   let result = arg.filter((value) => value % 2 === 0);
//   return result;
// }
// console.log(couplearrOfArr(arr));

// function sumOfArr(arr) {
//   let res = arr.reduce((acc, value) => acc + value, 0);
//   return res;
// }
// console.log(sumOfArr([1, 4, 2, 5]));

// function arr5Value(num = 6) {
//   return num ** 5;
// }
// console.log(arr5Value());

// "Pure function" (oddiy funksiya) JavaScript va boshqa dasturlash tillarida amaliyotda juda muhim muddat hisoblanadi. Bu funksiya quyidagi ikkita asosiy xususiyatga ega bo'lishi kerak:

// 1
//  Tasir etmaslik (Side-effect-free): Funksiya dastlabki kiritilgan argumentlarni o'zgartirmasligi kerak va boshqa funksiyalar yoki tizim resurslariga ta'sir ko'rsatmasligi kerak (masalan, fayllarni o'zgartirish, global o'zgaruvchilarni o'zgartirish va hokazo).

// 2
// Qaytish qiymatlarining aniq bo'lishi (Deterministic): Berilgan bir xolat uchun funksiya har doim bir vaqtning o'zida bir vaqtda o'zgaruvchi natijalarni qaytarishi kerak. Buning ma'noni, funksiya bir xolat uchun har doim bir vaqtning o'zida bir vaqtda o'zgaruvchi qaytaradi.

// CALLBACK
// let num = 1;
// doSomething(() => {
//   num = 2;
// });
// console.log(num);
//
// console.log(`Через секунду напечатаю Привет`);
// setTimeout(
//   function (greeting) {
//     console.log(` ${greeting})`);
//   },
//   1000,
//   "Привет"
// );
//
// Callback funksiyalar, aslida, boshqa funksiyaga argument sifatida uzatilgan funksiya bo'lib, bitta operatsiya tugaganda avtomatik ravishda ishga tushadi. Bu funksiyalar oddiy funksiyalardan farqli ravishda bo'lib, ular o'zgaruvchilar orqali olinadi va ularni ishga tushirish uchun funksiya ichida chaqiriladi.

// RECURSION
// function recurse(n) {
//   if (n < 1) {
//     return;
//   }
//   console.log(n);
//   recurse(n - 1);
// }
// recurse(100);

// function sumOfArray(arr, i = 0) {
//   if (i >= arr.length) {
//     return 0;
//   }
//   return arr[i] + sumOfArray(arr, i + 1);
// }
// console.log(sumOfArray([10, 20, 30]));

// function recurse(n, n2) {
//   if (n < 1) {
//     return;
//   }
//   console.log(n2 ** n);
//   recurse(n - 1, n2);
// }
// recurse(5, 6);

// function recurse(n, n2, sum = 0) {
//   if (n < 1) {
//     return;
//   } else {
//     sum = sum + n2 ** n;
//     recurse(n - 1, n2, sum);
//   }
//   console.log(sum);
// }
// recurse(5, 6);

// OBJECT
// let obj = {
//   name: `Zhitel__gigachad`,
//   chikibambunies: 14,
//   cows: 6,
//   peegs: 16,
//   vilagers: 3,
// };
// for (const key in obj) {
//   let res = obj[key];
//   console.log(key, `:`, res);
// }

// let sum = 0;
// let obj = {
//   chikibambunies: 14,
//   cows: 6,
//   peegs: 16,
//   vilagers: 3,
// };
// for (const key in obj) {
//   let res = obj[key];
//   sum += res;
// }
// console.log(sum);

// let obj = {
//   name: `Zhitel__gigachad`,
//   chikibambunies: 14,
//   cows: 6,
//   peegs: 16,
//   vilagers: 3,
// };
// let result = [];
// for (const key in obj) {
//   let res = obj[key];
//   result.push(key, res);
// }
// console.log(result);

// 1
// let arr = [1, 4, 2, 5, 6];
// let centerOfArray = arr.length / 2;
// function threeItems(arr, center) {
//   return arr.slice(center - 1, center + 2);
// }
// console.log(threeItems(arr, centerOfArray));

// 2

// 3
// let arr1 = [1, 3, 1, 2, 5];
// let arr2 = [1, 4, 2, 5];
// let arr3 = [5, 8, 4, 9];
// function threeArraies(arr1, arr2, arr3) {
//   return arr2.concat(arr3, arr1);
// }
// console.log(threeArraies(arr1, arr2, arr3));

// 4
// let arr = [1, 4, 2, 5];
// let n = 3;
// function indexOfNum(arr, n) {
// // indexOf boolean bolmagani uchun includes ishlatdim
//   if (arr.includes(n)) {
//     return n ** 3;
//   } else {
//     return false;
//   }
// }
// console.log(indexOfNum(arr, n));

// 5
// let arr = [2, 4, 2, 5];
// let n = 2;
// (function (arr, n) {
//   console.log(arr.lastIndexOf(n));
// })(arr, n);

// 6
// let arr1 = [1, 3, 6, 9];
// let arr2 = [1, 2, 3, 4];
// let index = 3;
// (function (arr1, arr2, n) {
//   if (arr1.includes(n) && arr2.includes(n)) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// })(arr1, arr2, index);

// 7
// let arr = [1, 4, 2, 5];
// let n = 3;
// function indexOfNum(arr, n) {
//   return arr.includes(n);
// }
// console.log(indexOfNum(arr, n));
