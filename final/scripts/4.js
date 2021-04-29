var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");


//create empty array
var images = [];
images.length = 3;

//push images into array

for(var i = 1 ; i < images.length ; i++){
  images[i] = new Image();
  images[i].src = "./sprites/cryblue/sadblue (0" + i.toString() + ").png";

}

var i = 1;
setInterval(function(){
  i++;
  if(i >= 3){
    i = 1;
  }
  c.drawImage(images[i],-40,-20,600,520)
},1000)
