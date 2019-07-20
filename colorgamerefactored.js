var numSquares = 6;
var colors =[];
var pickedColor; 
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
    
    setUpModeButtons();
    setUpSquares();

    reset();

}

function setUpModeButtons() {

    for(var i = 0; i<modeButtons.length; i++) {

        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Hard" ? numSquares = 6: numSquares = 3;
    
            reset();
        })
    }
    
}



function setUpSquares () {

        
    for(var i =0; i < squares.length; i++) {
     
        //Event listener checks if user clicked on the correct color
        squares[i].addEventListener("click", function() {

            
           var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor) {
                changeColor(clickedColor);
                message.textContent = "Correct!";
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?"
            }else{
                this.style.backgroundColor ="#232323";
                message.textContent = "Try Again!";
            }
           
        })
      
        
    }
}

function reset() {

    //Reset function, will reset all functions to initial

    //generate random colors
    colors = generateRandomColors(numSquares);
    //Clear message
    message.textContent = "";
    //Change resetButton text
    resetButton.textContent ="New Colors"
     //PickedColor reset
     pickedColor = pickColor();
    //Change display to new picked color
    colorDisplay.textContent = pickedColor;
   
    for(var i =0; i < squares.length; i++) {

        if(colors[i]) {
            //Will display all colors
            squares[i].style.display ="block";
        //Changes background color of squares to new random background color
        squares[i].style.backgroundColor =colors[i];
    }else {
                  //Other Squares will no longer be displayed in easy mode
                  squares[i].style.display ="none";
              }
    

            }
            h1.style.backgroundColor ="steelblue";
}




    colorDisplay.textContent = pickedColor;

   

    function changeColor(square) {
        for(var j =0; j < squares.length; j++) {
            squares[j].style.backgroundColor = square;
        }
    }

    function pickColor(){
       var random = Math.floor(Math.random() * colors.length);
       return colors[random];
    }

    //Random Color Generator
    function generateRandomColors(num) {

        //make an array
        var arr =[];
        //add num random colors to array
        for(var i = 0; i<num; i++){

            arr.push(randomColor());
        }
        //return that array
        return arr;
    }

    //resetbutton click listener reset
    resetButton.addEventListener("click", function() {
        reset();
    })

    //Function creates random rgb colors to be pushed to squares everytime a new game
    function randomColor() {

            //Generate amount of red from 0-255
        var r = Math.floor(Math.random() * 256);
        //Generate amount of blue from 0-255
        var g = Math.floor(Math.random() * 256);
        //Generate amount of green from 0-255
        var b = Math.floor(Math.random() * 256);
 

        return "rgb(" + r+ ", " + g + ", " + b + ")";
    }