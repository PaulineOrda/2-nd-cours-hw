// task1
let str = "dkETHcny";
console.log(str.toUpperCase());

// task2
const searchStart = (arrStr, str) => {
    const res = [];
    let i = 0;
    arrStr.forEach((element) => {
        if (element.toLowerCase().startsWith(str.toLowerCase())) {
            res[i] = element;
            i++;
        }
    });
    return res;
}

console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));

// task3
console.log(Math.ceil(32.58884));
console.log(Math.floor(32.58884));
console.log(Math.round(32.58884));

// task4 
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

// task5
const getRandomInt = (minValue, maxValue) => {
    console.log(Math.round(Math.random() * (maxValue - minValue)) + minValue);
}

getRandomInt(1, 10);

// task6
const getRandomArrNumbers = (maxValue) => {
    let arr = [];
    for (let i = 0; i < Math.floor(maxValue / 2); i++) {
        arr[i] = Math.round(Math.random() * maxValue);
    }
    return arr;
}

console.log(getRandomArrNumbers(7));

// task7
const getRandomInt2 = (minValue, maxValue) => {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}

console.log(getRandomInt2(5, 6));

// task8
// let currentDate = new Date();
// console.log(currentDate);

// task9
let currentDate = new Date();
let daysInMsec = 72 * 24 * 60 * 60 * 1000;
let searchDate = +currentDate + daysInMsec;
let afterDays = new Date(searchDate);
console.log(afterDays); 

// task10
const getDate = (date) => {
let myDate = new Date(date);
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + 
" - это " + days[myDate.getDay()] + "\n" +
"Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds(); 
return fullDate;
}

console.log(getDate("09 May 2023"));

