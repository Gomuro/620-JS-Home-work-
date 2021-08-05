// task1
let x = 1;
let y = 2;

let res1 = x + "" + y + "";// Допишіть код, необхідно використовувати змінні x і y

console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = x = "true" + y + ""// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x)  // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = +x + +y // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"

// task2
let num,evenPositiveNumber,numeriCally;
num = prompt("Ведіть число.");

// Парне додатнє число
evenPositiveNumber = (num % 2 == 0 && num > 0) ? console.log("Парне додатнє число.") : console.log("Непарне або не додатнє число.");

// Число кратне 7
numeriCally = (num % 7 == 0) ? console.log("Число кратне 7"): console.log("Число не кратне 7");

// task3

// Створив масив
let array = [];

// додали в масив значеня
array.push(10,"Tuesday", true, null,undefined);

// Вивів на екран число елементів, яке зберігається в масиві
document.write(array.length);

// запитую значення
arbitraryValue = prompt("Ведіть довільне значеня.");

// записую це значення в п'ятий елемент масиву;
array[5] = arbitraryValue;

// Вивів на екран
document.write(' '+array[5]);

// Видалив 1-ий елемент масиву 
array.shift();

// вивів масив на екран
document.write(' '+array);

//task4
// Початковий масив:
let cities = ["Rome", "Lviv", "Warsaw"];
//виводжу результуючй масив 
console.log(cities[0]+ "*" +cities[1] + "*" +cities[2]); 

//task5
let isAdult, verifyOld;
isAdult = prompt("Скільки вам років");
isAdult = +isAdult;
if (isAdult >= 18) {
    alert("Ви досягли повнолітнього віку")
}else if (isAdult <=10){
    alert("Ви ще надто молоді")
}

//task6


let sideA, sideB, sideC, p, s;

sideA = parseInt(prompt("Ведіть значеня сторни A "));

sideB = parseInt(prompt("Ведіть значеня сторни B"));

sideC = parseInt(prompt("Ведіть значеня сторни C"));

if (+sideA || +sideB || +sideC){
    
// a) визначаю площу трикутника 
p = (sideA + sideB + sideC)/2;
s = Math.sqrt(p*((p - sideA)*(p - sideB)*(p - sideC))); //<------------------------

console.log(s); //Площа Вивід

// b) перевіряю чи цей трикутник є прямокутним і виводжу в консоль результат перевірки.

if (sideC**2 ==  sideB**2+sideA**2 || sideB**2 == sideA**2 + sideC**2 || sideA**2 == sideB**2 + sideC**2) {
    console.log("Трикутник є прямокутним");
}else{
    console.log("Трикутник не є прямокутним");
}
// округляю число
let rounded
rounded = parseFloat(s.toFixed(3));

console.log(rounded);
}else{
    // перевірка на коректність даних
    alert("Incorrect data");
}

//task7
let dateTimet,hours,minutes;
time = new Date();
hours = time.getHours(); 


// method 1

if (hours >= 5 &&hours <11 ){
    alert("Доброго ранку");
}else if (hours >= 11 && hours < 17 ){
    alert("Доброго дня");
}else if (hours >= 17 && hours <23){
    alert("Доброго вечора");
}else if (hours == 23 || hours >=0 || hours < 5){
    alert("Доброї ночі");
}else{
    alert("помилка")
}

// method 2

switch (true) {
    case hours == 23 || hours >=0 && hours < 5:
        alert("Доброї ночі");
        break;
    case hours >= 5 &&hours <11:
        alert("Доброго ранку");
        break;
    case hours >= 11 && hours < 17:
        alert("Доброго дня"); 
        break;
    case hours >= 17 && hours < 23:
        alert("Доброго вечора");
        break;
}






