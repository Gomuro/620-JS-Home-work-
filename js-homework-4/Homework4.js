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





//task4


// function showUser(id){
//     if(id < 0){
//         throw new Error("It is not positive number");
//     }else{
//         let userId ={
//             id: id,
//         }
//         return userId;
//     }
// }
// console.log(showUser(5));



// function showUsers(ids) {
//     for(let x=0; x<ids.length; x++) {
//         if (ids[x] < 0) {
//             let err1 = new Error("ID must not be negative: " + ids[x]);
//             ids.splice(x, x);
//             console.log(err1.message);
//         }
//     }
    
//     ids.unshift("");
//     return console.log(ids.join(" id: "));
// }
// try {
//     let idUser = showUsers([7, -12, 44, 22]);
// } catch (error) {
//     console.log(error.message);
// }









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