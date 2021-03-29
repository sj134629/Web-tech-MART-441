var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2;
var direction;
var questions;
var squareArray = [];
var lives = 3;
var points = 0;
$(document).ready(function(){

    setup();
    setup2();

    $(this).keypress(function(event){
        getKey(event);

    });
});



function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // create two objects
    square1 = new Square(100,100,50,50,"#0000FF");
    square2 = new Square(100,400,15,500,"#00FF00");
    $.getJSON("./data/info.json", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color, data.squares[i].theCollectible));
        }
        drawSquare();
        drawSquare2();

    });



}

function setup2()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // create two objects
    square1 = new Square(100,100,50,50,"#0000FF");
    square2 = new Square(100,400,15,500,"#00FF00");
    $.getJSON("./data/square.json", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color, data.squares[i].theCollectible));
        }
        drawSquare2();
        drawSquare();

    });



}


function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
        direction = "up";
    }
    if(actualLetter == "s")
    {
        moveDown();
        direction = "down";
    }
    if(actualLetter == "a")
    {
        moveLeft();
        direction = "left";
    }
    if(actualLetter == "d")
    {
        moveRight();
        direction = "right";
    }
    var test = hasCollided(square1,square2);
    var test2 = false;
    for(var i = 0; i < squareArray.length; i++)
    {

        test2 = hasCollided(square1,squareArray[i]);
        if(test2 == true)
        {
            break;
        }

        console.log(test2);
    }
    if(test || test2)
    {

        points++;
        if(direction == "left")
        {
            moveRight();
        }
        else if(direction == "right")
        {
            moveLeft();
        }
        else if(direction == "up")
        {
            moveDown();
        }
        else if(direction == "down")
        {
            moveUp();
        }
console.log("hit wall");
    }
    drawSquare();
  

}

function moveUp()
{
    square1.y-=10;
}
function moveDown()
{
    square1.y+=10;
}
function moveRight()
{
    square1.x+=10;
}
function moveLeft()
{
    square1.x-=10;
}

function drawSquare()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height, square1.theCollectible);
    ctx.fillStyle = square2.mainColor;
    ctx.fillRect(square2.x, square2.y, square2.width, square2.height, square2.theCollectible);
    for(var i = 0; i < squareArray.length; i++)
    {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillStyle = squareArray[i].theCollectible;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height, squareArray[i].theCollectible);
    }

    ctx.font = "30px Arial";


}
function drawSquare2()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height, square1.theCollectible);
    ctx.fillStyle = square2.mainColor;
    ctx.fillRect(square2.x, square2.y, square2.width, square2.height, square2.theCollectible);
    for(var i = 0; i < squareArray.length; i++)
    {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillStyle = squareArray[i].theCollectible;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height, squareArray[i].theCollectible);
    }

    ctx.font = "30px Arial";
    ctx.fillText("points: " + points, 20, 50);

}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}
