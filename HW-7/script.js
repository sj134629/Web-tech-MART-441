var myImageFinderArray = new Array();
var counter = 0;

class imageFinder {
  constructor(title, image, discription, author, year)
  {
    this.title = title;
    this.image = image;
    this.discription = discription;
    this.author = author;
    this.year = year;

  }

  toString()
  {
    return (this.title + "<br>" + "<br>" + this.image + "<br>" + "<br>" + this.author + "<br>" + "<br>" + this.discription + "<br>" + "<br>" + this.year);

  }
  get theTitle()
  {
    return (this.title, this.image, this.discription, this.author, this.year);
  }


}

function goArray()
{
  var myImageFinder = new imageFinder("Title: The Starry Night", "<img src='./images/starry.jpg' width='400'></img>", "Artist: Vincent van Gogh", "Discription: This oil painting was painted by the famous Vincent van Gogh. He painted this painting while he was in an asylum that he admitted himself in to. It is said that he painted it from the view outside of his window.", "Year: 1889");
  var myImageFinder1 = new imageFinder("Title: The Creation of Adam ", "<img src='./images/adam.jpg' width='400'></img>", "Artist: Michelangelo", "Discription: This painting is a fresco painting and it forms part of the Sistine Chapel's ceiling","Year: 1512");
  var myImageFinder2 = new imageFinder("Title: Girl with the Peal Earring", "<img src='./images/pearl.jpg' width='400'></img>", "Artist: Johannes Vermeer ", "Discription: This oil painting is a tronie. A Tronie is the name given to a type of work common in Dutch Golden Age painting and Flemish Baroque painting. They are studies of expression.","Year: 1665");
  var myImageFinder3 = new imageFinder("Title: Mona Lisa", "<img src='./images/monalisa.jpg' width='400'></img>", "Artist: Leonardo da Vinci", "Discription: This painting is described as the best known, most visited, the most written about, the most sung about and the most paroidied work of art in the world","Year: 1517");
  var myImageFinder4 = new imageFinder("Title: The Scream", "<img src='./images/scream.jpg' width='400'></img>", "Artist: Edvard Munch", "Discription: The face in the painting has become one of the most iconic images of art and it symbolises the anxiety of the human condition.","Year: 1893");
  myImageFinderArray.push(myImageFinder);
  myImageFinderArray.push(myImageFinder1);
  myImageFinderArray.push(myImageFinder2);
  myImageFinderArray.push(myImageFinder3);
  myImageFinderArray.push(myImageFinder4);


}


function getInfo()
{
var random = Math.floor(Math.random() * myImageFinderArray.length)
  document.getElementById("art").innerHTML = myImageFinderArray[random].toString();

counter++;

}
