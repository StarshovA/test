'use strict';

let money = +prompt("Ваш бюджет на месяц:"),
    time = prompt("Введите дату в формате YYYY-MM-DD:"),
    expenses1 = prompt("Введите обязательную статью расходов в этом месяце:"),
    expenses2 = +prompt("Во сколько обойдется?");


let appData = {
    budget: money,
    timeData: time,
    expenses: {
        expenses1,
        expenses2,
    },
    optionalExpenses: "",
    income: "",
    savings: false
};

console.log(appData);
alert("Ваш бюджет на один день составляет: " + (money - expenses2) / 30 + "рублей");