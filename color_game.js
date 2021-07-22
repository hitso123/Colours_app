//====================================================
// Helper function
//====================================================
const pickColor =() => {
    const random=Math.floor(Math.random() *colors.length);
    return colors[random];

}

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const generateRandomColors = (num) => {
    let output=[];
    for(let i=0; i<num ;i++)
    {
        output.push(generateRandomColor());
    }
    return output;
}

const changeColor =(color) => {
    squares.forEach((square)=>{
        square.style.backgroundColor =color;
    })
}

const reset = () =>{
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    resetButton.textContent ="NewColors";
    colorDisplay.textContent=pickedColor;
    for(let i=0;i<squares.length;i++)
    {
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.backgroundColor="black";
        }
    }
    header.style.backgroundColor="steelblue";
    message.textContent="";
}

//====================================================
// Init Variables
//====================================================

//State
let numSquares = 6;
let colors=generateRandomColors(numSquares);
let pickedColor =pickColor();

//select elements
const header=document.querySelector("h1");
const squares= document.querySelectorAll(".square");
const colorDisplay=document.getElementById("colorDisplay");
const message=document.getElementById("message");
const resetButton =document.getElementById("resetButton");
const modeButtons =document.querySelectorAll(".mode")



//====================================================
// Main
//====================================================

function main() {
    colorDisplay.textContent =pickedColor;
    
    resetButton.addEventListener("click",reset);
    
    modeButtons.forEach((button) => {
        button.addEventListener("click",function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent=="Easy")
            {
                numSquares=3;
            }
            else{
                numSquares=6;
            }
            reset();
        });
    });

        
    //set up squares
    for(let i=0;i < squares.length; i++)
    {
        squares[i].style.backgroundColor =colors[i];
        squares[i].addEventListener("click", function(){
            const clickedColor=this.style.backgroundColor;
            if(clickedColor==pickedColor)
            {
                header.style.backgroundColor=pickedColor;
                message.textContent="Correct! :-D";
                changeColor(pickedColor);
                resetButton.textContent="Play Again?";
                
            }
            else{
                message.textContent="you suck";
                this.style.backgroundColor="black";
            }
        })
    }

}

main();




