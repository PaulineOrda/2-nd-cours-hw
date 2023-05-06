
const seasons = () => {
    let monthNumber = prompt("Введите число от 1 до 12");
    if (monthNumber <= 0 || monthNumber > 12 || isNaN(monthNumber)) {
        alert('Вы ввели неправильное значение');
    }

    // switch (monthNumber) {
    //     case 1:
    //     case 2:
    //     case 12:
    //         alert('Зима');
    //         break;
    //     case 3:
    //     case 4:
    //     case 5:
    //         alert('Весна');
    //         break;
    //     case 6:
    //     case 7:
    //     case 8:
    //         alert('Лето');
    //         break;
    //     case 9:
    //     case 10:
    //     case 11:
    //         alert('Осень');
    //         break;
    //     default:
    //         break;
    // }

    if (monthNumber == 1 || monthNumber == 2 || monthNumber == 12) {
        alert('Зима');
    }

    if (monthNumber == 3 || monthNumber == 4 || monthNumber == 5) {
        alert('Весна');
    }

    if (monthNumber == 6 || monthNumber == 7 || monthNumber == 8) {
        alert('Лето');
    }

    if (monthNumber == 9 || monthNumber == 10 || monthNumber == 11) {
        alert('Осень');
    }
}