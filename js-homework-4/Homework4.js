// task1
let width , height;
width = prompt("width");
height = prompt("height");

function calcRectangleArea(width , height) {
    if (typeof width !== "number"|| typeof height !== "number") {
        throw new Error("Error it is not a number");
    }
    return width*height;
}
try {
    let rect = calcRectangleArea(width , height);
    console.log(rect); 
} catch (error) {
    console.log(error)
}
// task2
let age = prompt("Enter your age: ");

age = +age;
function checkAge(age) {
    
    if (age === "") {
        throw new Error("The field is empty! Please enter your age.")
    }else if (typeof age !== "number" || isNaN(age)) {
        throw new Error("Error Enter number.");
    }else if (age < 14) {
        throw new Error("You are to young.")
    }
    return age;
}

try {
    let yourAge = checkAge(age);
    alert("Your age is " + yourAge);
} catch (error) {
    alert(error.message);
}
//task3

function showMonthName(month){
    month -= 1; 
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    class MonthException{
        constructor(message){
            this.MonthException = message;
            
        }
    }
    
    let whatMonth = new MonthException("Incorrect month number");
    if (months[month] != null) {
            return months[month];
    } else {
            return whatMonth;   
    }
    
}

try {
    console.log(showMonthName(15));
} catch (error) {
    console.log(error.name + ": " + error.message);
}





<<<<<<< HEAD







=======
//task4
>>>>>>> 912e183127e8a77a18155cfdea4b93bfca3f34cb


function showUser(id) { 
    if (id <= 0) { 
        throw new Error(": ID must not be negative:" + id); 
    } 
    return { 
         id 
    }; 
   } 

function showUsers(ids) { 
    const users = []; 
    for (i = 0; i < ids.length; i++) { 
        try { 
            users.push(showUser(ids[i])); 
        } catch (e) { 
            console.log(e.message) 
        } 
    } 
    return console.log(users); 
} 
try {
    showUsers([7, -12, 44, 22]);
} catch (exception) {
    console.log(exception.name + exception.message);
    console.log(users);
}
