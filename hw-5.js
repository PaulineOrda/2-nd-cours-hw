const minValue = (a, b) => {
    let result;
    if (a < b) {
        result = a;
    } else {
        result = b;
    }
    return result;
}

console.log(minValue(6, 6));

// task2
const  evenOrOdd = (a) => {
    
    if (a % 2 == 0) {
        return 'Четное число';
    } else {
        return 'Нечетное число';
    }
}

console.log(evenOrOdd(22));

// task3.1
const squareNumber = (a) => {
    let result = a ** 2;
    console.log(result);
}

squareNumber(5);

// task3.2
const squareNumber2 = (a) => {
    let result = a ** 2;
    return result;
}

console.log(squareNumber2(4));

// task4
const printHello = () => {
    let age = prompt('Сколько вам лет?');
    if (age < 0 || isNaN(age)) {
        alert('Вы ввели неправильное значение');
    }
    if (age >= 0 && age <= 12) {
        alert('Привет, друг');
    }
    if (age > 12) {
        alert('Добро пожаловать!');
    }
}

printHello();

// task5
const mult = (a, b) => {
    a = Number(a);
    b = Number(b);
    let result;
    if (isNaN(a) || isNaN(b)) {
        result = 'Одно или оба значения не являются числом';
    } else {
        result = a * b;
    }
    return result;
}

console.log(mult (2, 6));

// task6
const thirdDegree = () => {
    let a = Number(prompt ('Введите число'));
    if (isNaN(a)) {
        alert ('Переданный параметр не является числом');
    } else {
        let result = a ** 3;
        alert (`${a} в кубе равняется ${result}`);
    }
}

thirdDegree();

// task7
const circle1 = {
    radius: 3,
    getArea () {
        return (Math.PI * (this.radius ** 2));
    },
    getPerimeter () {
        return (2 * Math.PI * this.radius)
    }
}

const circle2 = {
    radius: 4,
    getArea () {
        return (Math.PI * (this.radius ** 2));
    },
    getPerimeter () {
        return (2 * Math.PI * this.radius)
    }
}

console.log(circle1.getArea()); ;
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());