'use string';

var money;
var time;

var money = prompt('Ваш бюджет в месяц?');

var time = prompt('Введите дату в формате YYYY-MM-DD');

var  expenses = prompt('Введите обязательнуюстатью расходов в этом месяце');

var secExpenses = prompt('Вo сколько обойдется?');

var appData = {
    money: money,
    time: time,
    expenses: {
        expenses  : secExpenses//выводит только превое :(
    },
    optionalExpenses: 0,
    income: 1,
    savings: 1
};

var day = alert("Ваш бюджет на 1 день -" + money/30);

console.log(appData.expenses);