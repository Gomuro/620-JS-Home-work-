// task1
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};
function propsCount(currentObject){
    return console.log(Object.keys(currentObject).length); 
}
propsCount(mentor);  // 3
// task2

const number = {
    one : 1,
    two : 2,
    three : 3,
    four : 4,
    five : 5,
}
function showProps(obj){
    let keys, props;
        keys = [];
        props = [];
        keys = Object.keys(obj);
        props = Object.values(obj);
        

    console.log(keys);
    console.log(props);
}
showProps(number);
//task3

class Person {
    constructor(name,surName){
        this.name = name;
        this.surName = surName;
    }
    showFullName(){
        console.log(this.surName + ' ' + this.name);
    }
}
let person = new Person("Yuriy","Danylovich");
person.showFullName();
class Student extends Person {
    constructor(name,surName,year){
        super(name,surName);
        this.year = year;
    }
    showFullName(midleName){
        this.midleName = midleName;
        return this.name + ' ' + this.surName + ' ' + this.midleName;
    }
    showCourse(){
        let course, nowYear;
        nowYear = new Date();
        nowYear = nowYear.getFullYear();
        return course = nowYear - this.year;
    }
}
let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 6

//task 4
 
class Worker{
    
    #experience = 1.2
     
    constructor(fullName,dayRate,workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    get showExp(){
        return this.#experience;
    }
    set setExp(value){
        this.#experience = value;
    }
    showSalary(){
        console.log(`${this.fullName} salary: `+this.dayRate*this.workingDays);
    }
    showSalaryWithExperience(){
        console.log(`${this.fullName} salary with experience: ${this.dayRate*this.workingDays*this.#experience}`);
    }
    
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 

worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);                 

worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);                 

worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

function sortedSalary(){
    console.log("Sorted Salary: ");
    let salary =[worker1.showSalaryWithExperience(), worker2.showSalaryWithExperience(), worker3.showSalaryWithExperience()];
    return salary = salary.sort();
}
sortedSalary();

// task 5
class GeometricFigure {
    getArea() {
        return 0;
}
    toString() {
     return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure{
    constructor(side,height){
        super()
        this.side = side;
        this.height = height;

    };
    getArea() {
       
      return 0.5 * this.side * this.height; 
       
    }
}
class Square extends GeometricFigure{
    constructor(side){
       super()
       this.side = side;
    }
    getArea() {
       return this.side ** 2;   
    }
}
class Circle extends GeometricFigure{
    constructor(radius){
        super()
        this.radius = radius;
    }
    getArea() {
        
        return Math.PI*this.radius**2;
         
    }
}
function handleFigures(figures) { 
 
    return Math.floor(figures.reduce((acc, fig) => { 
 
        if (fig instanceof GeometricFigure) { 
            console.log(`Geometric figure: ${fig.getArea()}`); 
            return acc + fig.getArea(); 
        } else { 
            return acc ; 
        } 
 
    }, 0)) 
} 
 
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)]; 
console.log(handleFigures(figures));


// class GeometricFigure { 
//     getArea() { 
//         return 0; 
//     } 
//     toString() { 
//         return Object.getPrototypeOf(this).constructor.name; 
//     } 
// } 
 
// class Triangle extends GeometricFigure { 
//     constructor(a, h) { 
//         super() 
//         this.a = a; 
//         this.h = h; 
//     } 
//     getArea() { 
//         let area = 0.5 * this.a * this.h; 
//         return area;
//     } 
// } 
 
// class Square extends GeometricFigure { 
//     constructor(a) { 
//         super() 
//         this.a = a; 
//     } 
//     getArea() { 
//         let area = this.side ** 2; 
//         return area;
//     } 
// } 
 
// class Circle extends GeometricFigure { 
//     constructor(r) { 
//         super() 
//         this.r = r; 
//     } 
//     getArea() { 
//         let area = Math.PI * this.r ** 2; 
//         return area;
//     } 
// } 
 
// function handleFigures(figures) { 
 
//     return Math.floor(figures.reduce((acc, fig) => { 
 
//         if (fig instanceof GeometricFigure) { 
//             console.log(fig.getArea) 
//             return acc + fig.getArea(); 
//         } else { 
//             return acc; 
//         } 
 
//     }, 0)) 
// } 
 
// const figures = [new Triangle(4, 5), new Square(7), new Circle(5), new Student(3)]; 
// console.log(handleFigures(figures));