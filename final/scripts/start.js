var c;

function toInstuctions()
{
  window.location="index2.html";
}
function toGame()
{
  window.location="game.html";
}

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");


//create empty array
var images = [];
images.length = 5;

//push images into array

for(var i =1 ; i < images.length ; i++){
  images[i] = new Image();
  images[i].src = "./sprites/sprite animation (' + i.toString() + ').png";

}

var i = 1;
setInterval(function(){
  i++;
  if(i >= 5){
    i = 1;
  }
  c.drawImage(images[i],100,100,100,100)
},100)
