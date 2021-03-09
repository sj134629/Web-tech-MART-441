// some variables
var animeSelector = "#anime";
var allAnime = new Array();
var count = 0;

//the class
class AnimeInfo{
  constructor(selector, imagePath)
  {
    this.selector = selector;
    this.imagePath = imagePath;
  }

  get theSelector()
  {
    return this.selector;
  }

  get theImagePath()
  {
    return this.imagePath;
  }

  toString()
    {
        return this.selector + ":" + this.imagePath;
    }
}
//the Array
function goArray(){
  var anime = new AnimeInfo("#anime", "images/kyo.jpg");
  var anime1 = new AnimeInfo("#anime", "images/ghoul.jpg");
  var anime2 = new AnimeInfo("#anime", "images/natsu.jpg");
  var anime3 = new AnimeInfo("#anime", "images/hunter.png");
  var anime4 = new AnimeInfo("#anime", "images/demon.jpg");
  allAnime.push(anime);
  allAnime.push(anime1);
  allAnime.push(anime2);
  allAnime.push(anime3);
  allAnime.push(anime4);
}

$(document).ready(function() {
    goArray();
    $(allAnime[0].theSelector).attr("src", allAnime[0].theImagePath);

//button
  $("button").click(function() {
    //time the things change
    setInterval(moveSquare, 3000);
    setInterval(moveCircle, 1000);
    setInterval(paraGraph, 8000);
    setInterval(paraGraph2, 9000);
    setInterval(paraGraph3, 10000);
    setInterval(changeImg, 5000);



      });

});
//moving shapes
function moveSquare()
{
  $("#square").animate({left:150}).animate({top:100}).animate({left:250}).animate({top:350}).fadeIn().fadeOut();

}
function moveCircle()
{
  $("#circle").animate({left:875}).animate({top:80}).animate({left:775}).animate({top:350}).fadeIn().fadeOut();

}


//changing text
function paraGraph()
{
  $("#first").toggle().fadeIn();

}
function paraGraph2()
{
  $("#second").toggle().fadeIn();

}
function paraGraph3()
{
  $("#third").toggle().fadeIn();

}

//changing the image
function changeImg(){
  var random = Math.floor(Math.random() * allAnime.length)
  $(allAnime[random].theSelector).attr("src", allAnime[random].theImagePath);
  $(allAnime[0].theSelector).fadeOut(500).fadeIn();

}
