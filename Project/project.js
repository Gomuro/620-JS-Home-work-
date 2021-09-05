class Startbutton {
    constructor(){
    let startButton = document.createElement('button');
    startButton.className = 'startButton';
    startButton.innerHTML ='Start';
    let element = document.querySelector('.container');
    element.append(startButton);
    }
}
class CreateButton {
    constructor(colorClassName , buttonClassName){
    this.colorClassName = colorClassName;  
    this.buttonClassName = buttonClassName;  
    let button = document.createElement('button');
    
    button.className = colorClassName;
    button.className += ` ${buttonClassName}`;
    
    
    let element = document.querySelector('.container');
    element.append(button);
    }
    displayWindow(windowClassName,windowColorClassName){
        let window = document.createElement('div');
        window.className=windowClassName;
        window.className += ` ${windowColorClassName}`;
        let element = document.querySelector('.container');
        element.appendChild(window);
        
    };
}
class DeleteButton {
    constructor(Btn){
        this.Btn = Btn;
        Btn.remove();
    }
}
class Block {
    constructor(){
        let window = document.createElement('div');
        window.className="block";
    }
}
class ActiveBlock{
    constructor(Button , Block){
        this.Button = Button;
        this.Block = Block;
        function ActiveBlock(){
            Block.classList.add("ActiveBlock");
        }
        
        function RemoveActiveBlock() {
            Block.classList.remove("ActiveBlock");
        }
        Button.addEventListener ("click", () => {
            if (Block.classList.contains("ActiveBlock")) {
                RemoveActiveBlock();
            } else {
                ActiveBlock()
            }
        });
    }
}

class RemoveOppositeActiveBlock extends ActiveBlock {
    constructor(Button , Block , OppositeBlock){
        super(Button, Block);
        this.OppositeBlock = OppositeBlock;
        function ActiveBlock(){
            Block.classList.add("ActiveBlock");
            OppositeBlock.classList.remove("ActiveBlock");
        }
        
        function RemoveActiveBlock() {
            Block.classList.remove("ActiveBlock");
        }
        Button.addEventListener("click", () => {
            if (Button.classList.contains("activeLeft")) {
                if (Block.classList.contains("ActiveBlock")) {
                    ActiveBlock();
                } else {
                    RemoveActiveBlock();
                }
            } else if(Button.classList.contains("activeRight")) {
                if (Block.classList.contains("ActiveBlock")) {
                    ActiveBlock();
                } else {
                    RemoveActiveBlock();
                }
            }
        })
    }
}
class ToggleButton {
    constructor(whatDiv , className){
        this.whatDiv = whatDiv;
        this.className = className;
        let toggleButton = document.createElement("button");
        let Div = whatDiv;
        toggleButton.className = className
        Div.appendChild(toggleButton);
        toggleButton.addEventListener("click",() => {
            toggleButton.classList.toggle("toggleActive");
        });
    }
}
class addToBlockText{
    constructor(whatDiv, className, Text){
        this.whatDiv = whatDiv;
        this.Text = Text;
        this.className = className;
        let pElem = document.createElement("p");
        pElem.innerHTML = Text;
        pElem.className = className;
        whatDiv.appendChild(pElem);
    } 
}
class addToBlockSlider {
    constructor(whatDiv,className,name,min,max){
        this.whatDiv = whatDiv;
        this.className = className;
        this.name = name;
        this.min = min;
        this.max = max;

        let input = document.createElement("input");
        input.className = className;
        input.setAttribute("type", "range");
        input.setAttribute("name",name);        
        input.setAttribute("min", min);
        input.setAttribute("max", max);
        whatDiv.appendChild(input);
    }
}



function startButton() { 
    let startButton = new Startbutton;
    return startButton;
}
startButton();



function removeStartButton(Btn) {
    let title = document.querySelector(".title");

    let Tvbutton = new CreateButton("TVButton","ButtonLeft").displayWindow("TVblock","BlockLeft");
    let Ventbutton = new CreateButton("VentButton","ButtonLeft").displayWindow("Ventblock","BlockLeft");
    let Lightbutton = new CreateButton("LightButton","ButtonLeft").displayWindow("Lightblock","BlockLeft");
    let Cofebutton = new CreateButton("CofeButton","ButtonLeft").displayWindow("Cofeblock","BlockLeft");
    let Securitybutton = new CreateButton("SecurityButton","ButtonRight").displayWindow("Securityblock","BlockRigth");
    let WiFIbutton = new CreateButton("WiFIButton","ButtonRight").displayWindow("WiFiblock","BlockRigth");
    let Garagebutton = new CreateButton("GarageButton","ButtonRight").displayWindow("Garageblock","BlockRigth");
    let WaterSupplybutton = new CreateButton("WaterSupplyButton","ButtonRight").displayWindow("WaterSupplyblock","BlockRigth");

    let TVButton = document.querySelector(".TVButton");
    let VentButton = document.querySelector(".VentButton");
    let LightButton = document.querySelector(".LightButton");
    let CofeButton = document.querySelector(".CofeButton");
    let SecurityButton = document.querySelector(".SecurityButton");
    let WiFIButton = document.querySelector(".WiFIButton");
    let GarageButton = document.querySelector(".GarageButton");
    let WaterSupplyButton = document.querySelector(".WaterSupplyButton");

    TVButton.innerHTML="<i class='fas fa-tv'></i>";
    VentButton.innerHTML = "<i class='fas fa-thermometer-half'></i>";
    LightButton.innerHTML = "<i class='far fa-lightbulb'></i>";
    CofeButton.innerHTML = "<i class='fas fa-mug-hot'></i>";
    SecurityButton.innerHTML ="<i class='fas fa-shield-alt'></i>"
    WiFIButton.innerHTML = "<i class='fas fa-wifi'></i>";
    GarageButton.innerHTML = "<i class='fas fa-warehouse'></i>";
    WaterSupplyButton.innerHTML = "<i class='fas fa-faucet'></i>";
    Btn.addEventListener ("click", function() {
        Btn.remove(); 
        title.classList.add("active");
        // Left button. 
        TVButton.classList.add("activeLeft");
        VentButton.classList.add("activeLeft");
        LightButton.classList.add("activeLeft");
        CofeButton.classList.add("activeLeft");
        // Right button.
        SecurityButton.classList.add("activeRight");
        WiFIButton.classList.add("activeRight");
        GarageButton.classList.add("activeRight");
        WaterSupplyButton.classList.add("activeRight");
    });
}
let startBtn = document.querySelector(".startButton");
removeStartButton(startBtn);

function ActiveBlocks(){
    let TVButton = document.querySelector(".TVButton");
    let TVblock = document.querySelector(".TVblock");

    let VentButton = document.querySelector(".VentButton");
    let Ventblock = document.querySelector(".Ventblock");
    
    let LightButton = document.querySelector(".LightButton");
    let Lightblock = document.querySelector(".Lightblock");
    
    let CofeButton = document.querySelector(".CofeButton");
    let Cofeblock = document.querySelector(".Cofeblock");
    
    let SecurityButton = document.querySelector(".SecurityButton");
    let Securityblock = document.querySelector(".Securityblock");
    
    let WiFIButton = document.querySelector(".WiFIButton");
    let WiFiblock = document.querySelector(".WiFiblock");

    let GarageButton = document.querySelector(".GarageButton");
    let Garageblock = document.querySelector(".Garageblock");

    let WaterSupplyButton = document.querySelector(".WaterSupplyButton");
    let WaterSupplyblock = document.querySelector(".WaterSupplyblock");

    let tv = new RemoveOppositeActiveBlock(TVButton , TVblock , Securityblock);
    let vent = new RemoveOppositeActiveBlock(VentButton , Ventblock ,WiFiblock);

    let light = new RemoveOppositeActiveBlock(LightButton , Lightblock, Garageblock);
    let cofe = new RemoveOppositeActiveBlock(CofeButton , Cofeblock , WaterSupplyblock);
    
    let security = new RemoveOppositeActiveBlock(SecurityButton , Securityblock, TVblock);
    let WiFI = new RemoveOppositeActiveBlock(WiFIButton , WiFiblock , Ventblock);
    
    let Garage = new RemoveOppositeActiveBlock(GarageButton , Garageblock ,Lightblock);
    let WaterSupply = new RemoveOppositeActiveBlock(WaterSupplyButton , WaterSupplyblock , Cofeblock);
    
    
    
    
    
    let addToggleSecurityblock = new ToggleButton(Securityblock);
    let addToggleWiFiblock = new ToggleButton(WiFiblock);
    let addToggleGarageblock = new ToggleButton(Garageblock);
    let addToggleWaterSupplyblock = new ToggleButton(WaterSupplyblock);
                // TV Block
    function ActiveTVBlock() {
        let addToggleTVblock = new ToggleButton(TVblock, "toggleButtonTV");
        let addTextOnOffTVBlock = new addToBlockText(TVblock,"TextInBlock","On/Off Tv");
        let addTextChangeChanal = new addToBlockText(TVblock,"Change","Change Chanal");
        
        let buttonLeft = document.createElement('button');
        let buttonRight = document.createElement('button');
        buttonLeft.className = "leftChangeChange";
        buttonRight.className = "RightChangeChange";
        buttonLeft.innerHTML = "<i class='fas fa-angle-double-left'></i>"
        buttonRight.innerHTML = "<i class='fas fa-angle-double-right'></i>";
        let addVolumeText = new addToBlockText(TVblock,"VolumeText","Volume");
        let volumeSlider = new addToBlockSlider(TVblock,"volumeSlider","Volume", "0", "100");
        document.querySelector('.volumeSlider').style.visibility="hidden";
        document.querySelector('.VolumeText').style.visibility="hidden";
        document.querySelector('.Change').style.visibility="hidden";

        let TVToggleButton = document.querySelector(".toggleButtonTV")
        TVToggleButton.addEventListener("click", () => {
            if (TVToggleButton.classList.contains("toggleActive")) {
                TVblock.append(buttonLeft, buttonRight); 
                document.querySelector('.volumeSlider').style.visibility = "unset";
                document.querySelector('.VolumeText').style.visibility = "unset";
                document.querySelector('.Change').style.visibility = "unset";
                
            }else{
                let removeButtonLeft = new DeleteButton(buttonLeft);
                let removeButtonRight = new DeleteButton(buttonRight);
                document.querySelector('.volumeSlider').style.visibility = "hidden";
                document.querySelector('.VolumeText').style.visibility = "hidden";
                document.querySelector('.Change').style.visibility = "hidden";
            }
        })
    }
    ActiveTVBlock();

    function ActiveVentBlock() {
        let addToggleVentblock = new ToggleButton(Ventblock , "toggleButtonVent");
        let addTextOnOffVentBlock = new addToBlockText(Ventblock,"TextInBlock","On/Off Vent");
        let buttonLeft = document.createElement('button');
        let buttonRight = document.createElement('button');
        
        buttonLeft.className = "leftChangeChange";
        buttonRight.className = "RightChangeChange";
        buttonLeft.innerHTML = "<i class='fas fa-plus'></i>"
        buttonRight.innerHTML = "<i class='fas fa-minus'></i>";
        let VentToggle = document.querySelector('.toggleButtonVent');
        
        let temperature = 10;     
         
        let temperatur = new addToBlockText(Ventblock,"TextTemperature",`${temperature} °C`);  
        buttonLeft.addEventListener("click", () => {
            temperature += 1;
            let textTemp = document.querySelector('.TextTemperature')
            textTemp.innerHTML = `${temperature} °C`;
        });  
        buttonRight.addEventListener("click", () => {
            temperature -= 1;
            let textTemp = document.querySelector('.TextTemperature')
            textTemp.innerHTML = `${temperature} °C`;
        }); 
           
        document.querySelector('.TextTemperature').style.visibility = "hidden";
        VentToggle.addEventListener('click', () => {
            if (VentToggle.classList.contains('toggleActive')){
                Ventblock.append(buttonLeft,buttonRight);
                document.querySelector('.TextTemperature').style.visibility = "unset";
            }else{
                let removeButtonLeft = new DeleteButton(buttonLeft);
                let removeButtonRight = new DeleteButton(buttonRight);
                document.querySelector('.TextTemperature').style.visibility = "hidden";
            }
        });       
    }
    ActiveVentBlock();


    function ActiveLightBlock(){
        let ToggleLight = new ToggleButton(Lightblock,'toggleButtonLight');
        let addTextOnOffLightBlock = new addToBlockText(Lightblock,"TextInBlock","On/Off Light");
        let addLightSlider = new addToBlockSlider(Lightblock,"LightSlider","Light", "0", "100");
        let LightToggle = document.querySelector('.toggleButtonLight');
        document.querySelector('.LightSlider').style.visibility = "hidden";
        let lightSlider = document.querySelector('.LightSlider');
        let addTextnumber = new addToBlockText(Lightblock,"NumberText",`${lightSlider.value}%`);
        let Textnumber = document.querySelector('.NumberText');
        document.querySelector('.NumberText').style.visibility = "hidden";

        lightSlider.addEventListener("input", () => {
            Textnumber.innerHTML = `${lightSlider.value}%`;
        })
        LightToggle.addEventListener("click", () =>{
            if (LightToggle.classList.contains("toggleActive")) {
                document.querySelector('.LightSlider').style.visibility = "unset";
                document.querySelector('.NumberText').style.visibility = "unset";
            } else {
                document.querySelector('.LightSlider').style.visibility = "hidden";
                document.querySelector('.NumberText').style.visibility = "hidden";
            }        
        });
    }
    ActiveLightBlock();
    function ActiveCofeBlock() {
        Cofeblock.innerHTML = `
        <button class="toggleButtonCofe"></button>
        <p class="TextInBlock delete">On/Off Cofe</p>
        <p class="TextInBlock question">What do you want?</p>
        <ul class="cofeul">
            
            <li class="Cofeli">Американо</li>
            <li class="Cofeli">Еспресо</li>
            <li class="Cofeli">Капучіно</li>
            <li class="Cofeli">Лате</li>
        </ul>
        
        `;
        let toggleButton = document.querySelector(".toggleButtonCofe")
        document.querySelector('.cofeul').style.visibility = 'hidden';
        document.querySelector('.question').style.visibility = 'hidden';
        
        function StartTimer(){
            const startingMinutes = 1;
            let time =startingMinutes * 60;

            let timer = document.createElement('p');
            timer.className = 'countdown'
            Cofeblock.appendChild(timer);
            const countdownEl = document.querySelector('.countdown');
            toggleButton.remove();
            let text_in_block = document.querySelector(".delete");
            text_in_block.remove();
            let timerdo = setInterval(() => {
                const minutes = Math.floor(time / 60);
                let seconds = time % 60;
                seconds = seconds < 10 ? "0"+ seconds : seconds;
                let Time = `${minutes} : ${seconds}`;
                console.log(Time);
                countdownEl.innerHTML = time;
                time--;
                if (Time === "0 : 00") {
                    clearInterval(timerdo);
                    countdownEl.innerHTML = "DONE";
                    
                    
                }
            },1000);
           
        }
        
        
        toggleButton.addEventListener("click",() => {
            toggleButton.classList.toggle("toggleActive");
            if (toggleButton.classList.contains("toggleActive")) {
                document.querySelector('.cofeul').style.visibility = 'unset';
                document.querySelector('.question').style.visibility = 'unset';
            } else {
                document.querySelector('.cofeul').style.visibility = 'hidden';
                document.querySelector('.question').style.visibility = 'hidden';
                remove.StartTimer();
            } 
        });
        
        document.querySelector('.cofeul').addEventListener('click',() => {
            document.querySelector('.cofeul').style.visibility = 'hidden';
            document.querySelector('.question').style.visibility = 'hidden';
            StartTimer();
        });
    }
    ActiveCofeBlock();



}

ActiveBlocks();

