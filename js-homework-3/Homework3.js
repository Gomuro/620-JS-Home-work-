// task1
const array = [2, 3, 4, 5];
let res = 1;

for (let i = 0; i < array.length; i++) {
    res *= array[i];
    console.log(res);
}
res = 1;
let i = 0;
while(i < array.length) {
    res *= array[i];
    console.log(res);
    i++;
}


//task2

for (let i = 0; i <= 15; i++) {
    if(i <= 15) {
        let res = (i % 2 == 0 && i >= 0) ? console.log(i + " is even.") : console.log(i + " is odd.");
    }
    
    
}
//task3
let k = [];

function randArray (n) {
    for (let i = 0; i < n; i++) {
         let a = Math.floor(Math.random() * 500);
    k.push(a);
    document.write( '<br>' + k)
    }
   ;

}

let l = prompt("Enter length array.")

l = +l;
if (l <= 50) {
    randArray(l);
}else{
    alert("too lage length array");
}

//task4
let as , bs , result;
as = prompt("Ведіть число яке буде піднесене до степення!");
bs = prompt("Ведіть число до якого підносять");

as = +as;
bs = +bs;

function raiseToDegree(a,b) {
    result =a**b
    result = Math.floor(result);
    alert(result + " Ваші числа піднескні одне до другого");
}

raiseToDegree(as,bs);






//task5
function findMin(){
    let minNumber = arguments[0];
    for (let i = 0; i <arguments.length; i++) {
        if (minNumber < arguments[i]) {
            minNumber != arguments[i];     
        }else if (arguments[i] < minNumber) {
            minNumber = arguments[i];
        }
    }
    document.write('<br/>',minNumber);
}
    

findMin(11 , 44 , 10);

//task6
let arr =[ 1, 2, 3, 3];

// let chekDublicate =[... new Set(arr)];
//     console.log(chekDublicate);


function findUnique(arr){ 
    arr.forEach( (element,index) => { 
        for ( let i = index + 1, n = arr.length ; i < n ; i++ ) { 
            if (element == arr[i]){ 
                return console.log(false, "- Завдання 6"); 
            } 
        } 
    }); 
    return console.log(true, "- Завдання 6"); 
} 
findUnique([1, 2, 3, 5, 3]);  // => false 
findUnique([1, 2, 3, 5, 11]); // => true


 
//task7 

function lastElem(arry , num = 1){
    let doLastElem = (arry.slice(-num)); 
    
    console.log(doLastElem);
}

lastElem([3, 4, 10, -5]);     // -5
lastElem([3, 4, 10, -5],2);   // [10, -5]
lastElem([3, 4, 10, -5],8);   // [3, 4, 10, -5]

//task8

function upcase(str) {
    let array = str.split(' ');
    let len = [];

    for (let i = 0; i <array.length; i++) {
        len.push(array[i].charAt(0).toUpperCase()+array[i].slice(1));
    }
    return len.join(' ');
}


console.log(upcase('i love java script'));








