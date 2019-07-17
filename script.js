'use strict';
// console.log(leftBorderWidth);
// var leftBorderWidth = 1;
// let second = 2;
// const pi = 3.14;

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(number);

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};
console.log(persone["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[2]);

//alert("Hello World!");
//let answer = confirm("Are you here?");
//console.log(answer);

//let answer = +prompt("Есть ли Вам 18 лет?", "Да");
//console.log(typeof(answer));

//console.log("arr" + " - object");
//console.log(4 + " - object");
let incr = 10,
    decr = 10;
incr++;
decr--;
console.log(incr, decr);

let isChecked = true,
    isClose = false;
console.log(isChecked && isClose);

let num = 50;
if (num < 49){
    console.log("Не верно!");
} else if (num > 100){
    console.log("Много");
} else{
    console.log("Верно!");
}

(num == 50) ? console.log ("Верно!") : console.log ("Не верно!");

switch (num){
    case num < 49:
        console.log("Не верно!");
        break;
    case num > 100:
        console.log("Много");
        break;
    case num > 80:
        console.log("Все еще много");
        break;
    case 50:
        console.log("Верно!");
        break;
    default:
        console.log("Что-то пошло не так");
        break;
}