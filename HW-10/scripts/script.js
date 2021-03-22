var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var canCtx = canvas.getContext("2d");
var x = 0;
var y = canvas.height/2;
var x2 = canvas.width/2;
var y2 = 100;
var canHeight = 50;
var canWidth = 50;
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
function drawBoth() {
  ctx.fillStyle = square1.theColor;
  canCtx.fillRect(x, y, canWidth, canHeight);
  ctx.fillStyle = square2.theColor;
  canCtx.fillRect(x2, y2, canWidth, canHeight);

  setInterval(moveGreenSquare, 3000/60);
}


// this function creates new instances of squares aka an update function
function createSquares() {
    square1 = new Square(x, y, canWidth, canHeight, "blue");
    square2 = new Square(x2, y2, canWidth, canHeight, "green");
    ctx.clearRect(0, 0, 1000, 1000);
    drawSquare();
}

// this function will randomly move the second square around the canvas
function moveGreenSquare() {

    square2.setX(Math.floor(Math.random() * canvas.width));
    square2.setY(Math.floor(Math.random() * canvas.height));

    drawSquare();
}

// this function just draws the squares to the canvas in their respective locations
function drawSquare() {

    // possible square1 canvas collision
    if (x >= (canvas.width - 5)){
      x-=5
      canCtx.fillRect(x, y, canWidth, canHeight);
    }
    else if(x < (canvas.width - canvas.width)){
      x+=5
      canCtx.fillRect(x, y, canWidth, canHeight);
      }
    else if(y >= (canvas.height - 5)){
      y-=5
      canCtx.fillRect(x, y, canWidth, canHeight);
      }
    else if(y < (canvas.height - canvas.height)){
      y+=5
      canCtx.fillRect(x, y, canWidth, canHeight);
      }
    else {
      canCtx.fillRect(x, y, canWidth, canHeight);
    }

}

function drawSquare2(){
  //possible square2 canvas collision
  createSquares();
  if (x2 >= (canvas.width - 10)){
    x2-=5
    canCtx.fillRect(x2, y2, canWidth, canHeight);
  }
  else if(x < (canvas.width - canvas.width)){
    x2+=5
    canCtx.fillRect(x2, y2, canWidth, canHeight);
    }
  else if(y >= (canvas.height - 10)){
    y2-=5
    canCtx.fillRect(x2, y2, canWidth, canHeight);
    }
  else if(y2 < (canvas.height - canvas.height)){
    y2+=5
    canCtx.fillRect(x2, y2, canWidth, canHeight);
    }
  else {
    canCtx.fillRect(x2, y2, canWidth, canHeight);
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
      y = canvas.height/2
      x2 = canvas.width/2;
      y2 = 50;
      if (canWidth <= 10) {
       canWidth = 10;
       canHeight = 10;
     }
     else {
       canWidth -= 5;
       canHeight -= 5;
     }
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
    drawSquare2();
}

// movement funtions
function moveUp() {
    y-=5;
}

function moveDown() {
    y+=5;
}

function moveLeft() {
    x-=5;
}

function moveRight() {
    x+=5;
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
