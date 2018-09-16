var numberSquares = 6;
var colors = generateRandomColor(numberSquares);

var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor = pickColor();
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
	reset();

});

easyButton.addEventListener("click", function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numberSquares = 3;
	reset();
	for (var i = 0; i < squares.length; i++) {
		// squares[i].style.backgroundColor = "#232323";
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	};
});

hardButton.addEventListener("click", function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numberSquares = 6;
	reset();
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		
	};
});


function reset(){
	//generate all new colors
	colors = generateRandomColor(numberSquares);
	//change colors of squares
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.backgroundColor = colors[i];
	};
	//pick a new random color from arrya
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "NEW COLORS";
};

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			for (var i = 0; i < colors.length; i++) {
				squares[i].style.backgroundColor = pickedColor;
			};
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "PLAY AGAIN?"
		}else{
			messageDisplay.textContent = "Try Again";
			this.style.backgroundColor = "#232323";	
		};
	});
};


function pickColor(){
	var randomNum =Math.floor(Math.random() * colors.length);
	return colors[randomNum];
};

function generateRandomColor(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		//put random color into array
		arr.push(randomColor());
	}
	//return random color array
	return arr;
};

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}