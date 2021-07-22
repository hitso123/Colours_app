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

//====================================================
// Init Variables
//====================================================

//State
let numSquares = 6;

//select elements
const header=document.querySelector("h1");
const squares= document.querySelectorAll(".square");
const colorDisplay=document.getElementById("colorDisplay");
const message=document.getElementById("message");
const resetButton =document.getElementById("resetButton");
const easyButton =document.getElementById("easyButton");
const hardButton =document.getElementById("hardButton");


let colors=generateRandomColors(numSquares);
let pickedColor =pickColor();

//====================================================
// Main
//====================================================

//update colorDisplay
colorDisplay.textContent =pickedColor;

//Reset Colors Button
resetButton.addEventListener("click",function(){
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent =pickedColor;
    header.style.backgroundColor="steelblue";
    message.textContent="";
    this.textContent="New Colors";
    for (let i=0;i<colors.length;i++){
        squares[i].style.backgroundColor = colors[i];
    }
})

//easyButton
easyButton.addEventListener("click",function(){
    this.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares=3;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(let i=0;i<squares.length;i++)
    {
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display ="none";
        }
    }
})
//hardButton
hardButton.addEventListener("click",function(){
    this.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares=6;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(let i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
    }
})

//set up squares
for(let i=0;i < squares.length; i++)
{
    squares[i].style.backgroundColor =colors[i];
    //Add Onclick listners
    squares[i].addEventListener("click", function(){
        //get the color of the picked sqauere
        const clickedColor=this.style.backgroundColor;
        //console.log(clickedColor);
        //Compare that color with the ipicked color
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

const changeColor =(color) => {
    squares.forEach((square)=>{
        square.style.backgroundColor =color;
    })
}

