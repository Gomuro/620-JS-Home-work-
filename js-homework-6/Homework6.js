// Task 1

document.getElementById("test").innerHTML = "last";
document.querySelector("#test").innerHTML = "last";

// Task 2
document.querySelector(".image").src = "cat.jpg";
const image = document.querySelector('.image');
const exampleAttr= image.getAttribute('class');
const attr= image.getAttribute('src');
alert(`class ${exampleAttr} src ${attr}`);
//Task 3

    
let selector = document.querySelectorAll("#text p");
for (let i=0; i < selector.length; i++){
    let current = selector[i].innerHTML;
    console.log(`Selector text ${i}: ${current}`);
}
 

//Task 4

function methodOne(){
    let numberList = document.querySelectorAll("#list li");

    let modalNumber = [];

    modalNumber.push(numberList[0].innerHTML,numberList[4].innerHTML,numberList[1].innerHTML,numberList[3].innerHTML,numberList[2].innerHTML);
    for(let i = 0; i < numberList.length; i++){
        alert(modalNumber[i]);
    }
}

methodOne();


function methodTwo() {
    let numberList = document.querySelectorAll("#list li");

    
    
    function swapList(a ,b){[numberList[a].innerHTML, numberList[b].innerHTML] = [numberList[b].innerHTML, numberList[a].innerHTML];}
    swapList(1,4);
    swapList(2,4);
    
    for (let i = 0; i <numberList.length; i++){
        alert(numberList[i].innerHTML);
    }
}
methodTwo();

//Task 5

document.querySelector("h1").style.backgroundColor = "#93F293";

document.querySelectorAll("#myDiv p")[0].style.fontWeight = "bold";

document.querySelectorAll("#myDiv p")[1].style.color = "red";

document.querySelectorAll("#myDiv p")[2].style.textDecoration = "underline";

document.querySelectorAll("#myDiv p")[3].style.fontStyle = "italic";
let makeHorizontal = document.querySelectorAll("#myList li");
    for (let i = 0; i <makeHorizontal.length; i++){
        makeHorizontal[i].style.display = "inline-flex";
    }

    document.querySelector("span").style.visibility = "hidden";
//Task 6

let text1 = prompt("textOne", "Please enter your text");
let text2 = prompt("textTwo", "Please enter your text");

let tmp = text1;
text1 = text2;
text2 = tmp;


let input1 = document.getElementById("input1").setAttribute("value", text1);
let input2 = document.getElementById("input2").setAttribute("value", text2);


//Task 7

let newMain = document.createElement("main");

newMain.className = "mainClass check item";

newMain.innerHTML = "<div id='myDiv'><p>First paragraph</p></div>";

document.body.appendChild(newMain);