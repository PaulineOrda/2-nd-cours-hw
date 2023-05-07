// task1
const arr = [1, 5, 4, 10, 0, 3];
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
    if (arr[index] == 10) {
        break;
    }
}

// task2
console.log(arr.indexOf(4));

// task3
const arr3 = [1, 5, 4, 10, 20];
console.log(arr3.join(' '));

// task4
const arr4 = [[],[],[]];
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        arr4[i][j] = 1;   
    }   
}

console.log(arr4);

// task5
const arr5 = [1, 1, 1];
for (i = 0; i < 3; i++) {
    arr5.push(2);    
}

console.log(arr5);

// task6
const arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
arr6.pop();
console.log(arr6);

// task7
const arr7 = [9, 8, 7, 6, 5];
let value = Number(prompt('Введите число от 1 до 10'));
if (arr7.includes(value)) {
    console.log(`В массиве содержится значение ${value}`);
} else {
    console.log(`Значения ${value} в массиве нет`);
}

// task8
let string = 'abcdef';
let arr8 = string.split('');
arr8.reverse();
console.log(arr8.join(''));

// task9
let arr9 = [[1, 2, 3], [4, 5, 6]];
let res = [].concat(...arr9);
console.log(res);

// task10
const arr10 = [11, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (i = 0; i < arr10.length; i++) {
    if (i < arr10.length - 1) {
        let sum = arr10[i] + arr10[i + 1]; 
        console.log(sum);
    } else {
        sum = arr10[i];
        console.log(sum); 
    }   
}

// task11
const squareArr = (arr) => {
    let res = arr.map(item => (item*item));
    return res;
}

console.log(squareArr([1, 2, 3]));

// task12
const getLengthWords = (arr) => {
    let res = arr.map(item => (item.length));
    return res;
}

console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));

// task13
const getNegativeValues = (arr) => {
    let res = arr.filter(item => item < 0);
    return res;
}
console.log(getNegativeValues([1, 2, 3, -8, -7, 5, 0, -4]));