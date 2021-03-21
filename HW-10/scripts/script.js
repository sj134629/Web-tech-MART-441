var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 100;
var y2 = 100;
var square1;
var square2;

//class for objects
class Square {
    constructor(x, y, height, width, color) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
    }

    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    setHeight(height) {
        this.height = height;
    }
    setWidth(width) {
        this.width = width;
    }
    setColor(color) {
        this.color = color;
    }
    get theX() {
        return this.x;
    }
    get theY() {
        return this.y;
    }
    get theHeight() {
        return this.height;
    }
    get theWidth() {
        return this.width;
    }
    get theColor() {
        return this.color;
    }
}

// need to create the squares before we draw them
createSquares();
// display the squares on the basic canvas
drawSquare();

// this timer will move the second square around
setInterval(moveGreenSquare, 4000);

// this function creates new instances of squares
function createSquares() {
    square1 = new Square(x, y, 20, 20, "blue");
    square2 = new Square(x2, y2, 50, 50, "green");

}

// this function will randomly move the second square around the canvas
function moveGreenSquare() {

    square2.setX(Math.floor(Math.random() * canvas.width));
    square2.setY(Math.floor(Math.random() * canvas.height));
    
    drawSquare();
}

// this function just draws the squares to the canvas in their respective locations
function drawSquare() {
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillStyle = square1.theColor;
    ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
    ctx.fillStyle = square2.theColor;
    ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);
// possible square1 canvas collision
    if (x >= (canvas.width - 20)){
      x-=5
      ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
    }
    else if(x < (canvas.width - canvas.width)){
      x+=5
      ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
    }
    else if(y >= (canvas.height - 20)){
      y-=5
      ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
    }
    else if(y < (canvas.height - canvas.height)){
      y+=5
      ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
    }

//possible square2 canvas collision
if (x2 >= (canvas.width - 20)){
  x2-=5
  ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);
}
else if(x2 < (canvas.width - canvas.width)){
  x2+=5
  ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);
}
else if(y2 >= (canvas.height - 20)){
  y2-=5
  ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);
}
else if(y2 < (canvas.height - canvas.height)){
  y2+=5
  ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);
}


}


$(document).ready(function () {
    $(this).keypress(function (event) {
        getKey(event);
    });
});

// this function checks which key was pressed
function getKey(event) {

    // only checking collision when a key is pressed
    var didCollide = hasCollided(square1, square2,);
    // if a collision happens
    if (didCollide) {
      x = 0;
      y = 0
      x2 = 50;
      y2 = 50;
        // change the background color
        canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        // size of Squares get changed
        square1.setWidth(square1.theWidth + 1);
        square1.setHeight(square1.theHeight + 1);
        square2.setWidth(square2.theWidth - 1);
        square2.setHeight(square2.theHeight - 1);
    }


    // the keys to press
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "w") {
        moveUp();
    } else if (actualLetter == "s") {
        moveDown();
    } else if (actualLetter == "d") {
        moveRight();
    } else if (actualLetter == "a") {
        moveLeft();
    }

    drawSquare();
}

// movement funtions
function moveUp() {
    square1.setY(square1.theY - 10);
}

function moveDown() {
    square1.setY(square1.theY + 10);
}

function moveLeft() {
    square1.setX(square1.theX - 10);
}

function moveRight() {
    square1.setX(square1.theX + 10);
}

// collision function
function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}
