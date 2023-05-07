// task1
for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

// task2
for (i = 1; i <= 5; i++) {
    console.log(i);
}

// task3
for (i = 7; i <= 22; i++) {
    console.log(i);
}
// task4
const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
}
for (let name in obj) {
    console.log(`${name} - зарплата ${obj[name]} долларов.`);
}
// task5
let n = 1000;
let num = 0;
while (n > 50) {
    n /= 2;
    num++;
}
console.log(`результат ${n}, количество итераций ${num}`);

// task6
let firstFriday = 7;
for (i = 1; i <= 31; i++) {
    if (i == firstFriday) {
        console.log(`Сегодня пятница, ${i}-e число. Необходимо подготовить отчет`);
        firstFriday += 7;
    }    
}