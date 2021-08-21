// task1

let jsWindow = window.open(
    'http://localhost/js/about.html',
    'about',
    'height=600,width=800');

setTimeout(() => {
    jsWindow.resizeTo(600, 300);
}, 2000);

setTimeout(() => {
    jsWindow.moveTo(200, 200);
}, 4000)
setTimeout(() => {
    jsWindow.close();
}, 6000)
// task2

document.getElementById("button").addEventListener("click", changeCSS);
function changeCSS(){
    text.style.color = "orange";
    text.style.fontFamily = "Comic Sans MS";
    text.style.fontSize = "20px";
}
// task3
function changeBackgroundColor(){
    let body = document.querySelector('body');

    document.querySelector('#buttonBlue').addEventListener("click",() =>{
        body.style.backgroundColor ="blue";
    })
    document.querySelector('#buttonPink').addEventListener('dblclick',() =>{
        body.style.backgroundColor ="pink";
    })
    document.querySelector('#buttonBrown').addEventListener('mousedown',() =>{
        body.style.backgroundColor ="brown";
    })
    document.querySelector('#buttonBrown').addEventListener('mouseup',() =>{
        body.style.backgroundColor ="white";
    })
    document.querySelector('#yellowHover').addEventListener('mouseover',() =>{
        body.style.backgroundColor ="yellow";
    })
    document.querySelector('#yellowHover').addEventListener('mouseleave',() =>{
        setTimeout(function() {
           body.style.backgroundColor ="white";
          }, 300);
        
    })
}
changeBackgroundColor();
// task4
function DeleteValues() {
    var dropDown = document.getElementById("name-select");
    for (var i = 0; i <= dropDown.options.length; i++) {
        if (dropDown.options[i].selected) {
            dropDown.removeChild(dropDown.options[i]);
            break;
        }
    }
}

document.querySelector('#delete').addEventListener("click",DeleteValues);

// task5
let liveButton = document.querySelector('#liveButton');



liveButton.addEventListener("mouseover",() => {
    let p = document.createElement("p");
    p.innerHTML ="Mouse on me.";
    document.body.appendChild(p);
});
liveButton.addEventListener("mouseout",() => {
    let p = document.createElement("p");
    p.innerHTML ="Mouse is not on me.";
    document.body.appendChild(p);
})
liveButton.addEventListener("click",() => {
    let p = document.createElement("p");
    p.innerHTML ="I was clicked!";
    document.body.appendChild(p);
})
// task6

function monitorsTheResizing(){
    let p = document.createElement("p");
    p.id = "monitor";
    
    window.addEventListener("resize",() => {
    let width, height;
    width = window.innerWidth;
    height = window.innerHeight;    
    document.querySelector("#monitor").innerHTML = `width: ${width}  height: ${height}`;
    
    })
   document.body.appendChild(p);
} 

monitorsTheResizing();


//task7
function AddOptions(option) {
    let cities = document.querySelector("#cities");  
    let newOption = new Option(option,'Option Value');
    cities.appendChild(newOption);
} 
function changeOptions(){} {
    let country = document.getElementById("country");
    let cities = document.getElementById("cities");
    let pElem = document.getElementsByTagName("p")[1];
    let lo;let hi; 
    
    country.addEventListener("change",() => {
        for (var i = 0; i < country.length; i++){
            
        if (country.options[0].selected) {
            for (const x in cities) {
                cities.remove(country.options[x]);
            }
            AddOptions("Pls. change city");
            AddOptions("Berlin");
            AddOptions("Drezden");
            AddOptions("Dortmund");
            if (cities.options[0]){}
            pElem.innerHTML = `Country: ${country.options[0].innerHTML}`;
            break;
        }else if (country.options[1].selected){
            
            for (const x in cities) {
                cities.remove(country.options[x]);
            }
            AddOptions("Pls. change city");
            AddOptions("New-York");
            AddOptions("Washington");
            AddOptions("Los-Angeles");
            pElem.innerHTML = `Country: ${country.options[1].innerHTML}`;
            break;
        }else if (country.options[2].selected){
            
            for (const x in cities) {
                cities.remove(country.options[x]);
            }
            AddOptions("Pls. change city");
            AddOptions("Kyiv");
            AddOptions("Lviv");
            AddOptions("Odessa");
            pElem.innerHTML = `Country: ${country.options[2].innerHTML}`;
            break;
        }
        
        }
        
    });
    cities.addEventListener("change",() => {
        for ( let i = 0; i <cities.length; i++){
            
            if (cities.options[1].selected){
                pElem.innerHTML = ` City: ${cities.options[1].innerHTML}`;
                break;
            }else if (cities.options[2].selected){
                pElem.innerHTML = ` City: ${cities.options[2].innerHTML}`;
                break;
            }else if (cities.options[3].selected){
                pElem.innerHTML = ` City: ${cities.options[3].innerHTML}`;
                break;
            }      
        }
    })
    
}
changeOptions()

