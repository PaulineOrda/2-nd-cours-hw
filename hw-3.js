let password = 'пароль';
let userPassword = prompt ('Введите пароль');
if (password == userPassword) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

// task2
let c = 5;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// task3
let d = 100;
let e = 101;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// task4
let a = '2';
let b = '3';
alert (Number(a) + Number(b));

// task5
let monthNumber = 6;
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;   
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;            
    default:
        break;
}

// task7
let value = prompt ('Пожалуйста, введите любое число');
if (isNaN(value)) {
    alert ('Вы ввели не число');
} else if (value % 2 == 0) {
    alert ('Число четное');
} else {
    alert ('Число не четное');
}

// task8
// let clientOS = confirm ('Ваша операционная система Android?');
// if (clientOS == 1) {
//     console.log('Установите версию приложения для Android по ссылке');
// } else {
//     console.log('Установите версию приложения для iOS по ссылке');
// }

// task9
let clientOS = confirm ('Ваша операционная система Android?');
let clientDeviceYear = prompt ('Введите год выпуска вашего телефона');
if (clientOS == 1 && clientDeviceYear >= 2015) {
    console.log('Установите версию приложения для Android по ссылке');
}
if (clientOS == 1 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
}
if (clientOS == 0 && clientDeviceYear >= 2015) {
    console.log('Установите версию приложения для iOS по ссылке');
}
if (clientOS == 0 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
}