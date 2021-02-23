//second page (index.html)
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"];
var blankImagePath = "./images/bgimg.jpg";
var matchImages = new Array();
var firstNumber = -1;
var secondNumber = -1;
var attempts = 0;
var total = 0;
//json container
var player = {"firstname":"", "lastname":"", "yourage":"", "attempts":""};
var attempts = 0;
var total = 0;

function printBlanks()
{

    RandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    }



}

function RandomImageArray()
{
    var matchImagePath = ["./images/cute.jpg", "./images/hide.jpg", "./images/sphynx.jpg", "./images/yellow.jpg","./images/black.jpg"];
    var count = [0,0,0,0,0,0,0,0,0,0];
    while(matchImages.length < 10)
    {

        var randomNumber = Math.floor(Math.random() * matchImagePath.length)

        if(count[randomNumber] < 2);
        {
            matchImages.push(matchImagePath[randomNumber]);

            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

function flipCard(number)
{
  if(firstNumber >= 0)
    {
        secondNumber = number;
        document.getElementById(imageTags[number]).src = matchImages[secondNumber];
        attempts = attempts + 1;
    }
    else if(firstNumber < 0)
    {
        firstNumber = number;
        document.getElementById(imageTags[firstNumber]).src= matchImages[firstNumber];

    }


    if(matchImages[secondNumber] != matchImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {

        setTimeout(imagesDisappear, 500);
    }

    else if(matchImages[secondNumber] == matchImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {

        firstNumber = -1;
        secondNumber = -1;
        total = total =1;
        if (total >= 5) {
          var player = playerInfo();
          player.attempts = attempts;
          localStorage.setItem("playerInfo", JSON.stringify(player));
          setTimeout(reSults, 1000);
        }
    }



}
function imagesDisappear()
{
  console.log(firstNumber);
  document.getElementById(imageTags[firstNumber]).src = blankImagePath;
  document.getElementById(imageTags[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

//first page (intro.html)


function addtoPlayer()
{
    var firsTname = document.getElementById("firstName").value;
    player.firstname = firsTname;
    console.log(firsTname)
    var lasTname = document.getElementById("lastName").value;
    console.log(lasTname)
    player.lastname = lasTname;

    var yourAge = document.getElementById("ageNumber").value;
    console.log(yourAge)
    player.yourage = yourAge;

    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "index.html";
}

function playerInfo()
{
  var playerInformation = localStorage.getItem("playerInfo")
  let player = JSON.parse(playerInformation);
  console.log(player.firstname)
  console.log(player.lastname)
  console.log(player.yourage)
  return player;
}

function finalScore() {
  let player = playerInfo();
  document.getElementById(firstNa).innerhtml = player.firstname ;
  document.getElementById(lastNa).innerhtml = player.lastname ;
  document.getElementById(ageNu).innerhtml = player. yourage;
  document.getElementById(tries).innerhtml = player. attempts;
}


function reSults(){
  window.location = "final.html"
}
 function reStart(){
   window.location = "intro.html"
 }
