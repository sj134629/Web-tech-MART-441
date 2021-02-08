// im trying to make just this function show up first without the second function showing up. Once I hit submit on this funtion it will then move on to the second function saying hi so and so and then it will go on to the story in the none parameter functions
var restartButton;

function getName(greeting)
           {
               var currentName = document.getElementById("txtName").value;
               document.getElementById("lblName").innerHTML = currentName + ", " + greeting;

           }
function getChoice1()
{
  var myChoice = document.getElementById("choice").value;
  var myQuestion = document.getElementById("question");
  if (myChoice === "cheese") {

    document.getElementById("choice").style.display="none";
    document.getElementById("submit").style.display="none";

    document.getElementById("choice2").style.display="block";
    document.getElementById("submit2").style.display="block";

    myQuestion.innerHTML = "Good choice the 4 cheeses will make your mouth water. Kendera like both coke and pepsi but only needs to get one. Which one should she get?";
  }
  else if (myChoice === "meat") {

    document.getElementById("choice").style.display="none";
    document.getElementById("submit").style.display="none";

    document.getElementById("choice3").style.display="block";
    document.getElementById("submit3").style.display="block";
    myQuestion.innerHTML = "yummm Meat!!! Kendera wants to get a side to go with the pizza. Should she get sweet or salty?";
  }
  else {
    myQuestion.innerHTML = "Invalid Answer";
  }
}

function getChoice2()
{
  var myChoice = document.getElementById("choice2").value;
  var myQuestion = document.getElementById("question");
  if (myChoice === "coke") {

    document.getElementById("choice2").style.display="none";
    document.getElementById("submit2").style.display="none";

    document.getElementById("choice4").style.display="block";
    document.getElementById("submit4").style.display="block";

    document.getElementById("mainImage").src ="./img/pepsi.jpg";
    myQuestion.innerHTML = "Coke is yummy!";
  }
  else if (myChoice === "pepsi") {
    document.getElementById("choice2").style.display="none";
    document.getElementById("submit2").style.display="none";

    document.getElementById("choice4").style.display="block";
    document.getElementById("submit4").style.display="block";

    document.getElementById("mainImage").src ="./img/pepsi.jpg";
    myQuestion.innerHTML = "Pepsi is a good choice";
  }
  else {
    myQuestion.innerHTML = "Invalid Answer";
  }
}

function getChoice3()
{
  var myChoice = document.getElementById("choice3").value;
  var myQuestion = document.getElementById("question");
  if (myChoice === "sweet") {
    document.getElementById("choice3").style.display="none";
    document.getElementById("submit3").style.display="none";

    document.getElementById("choice4").style.display="block";
    document.getElementById("submit4").style.display="block";
    myQuestion.innerHTML = "Sugar yes! Should Kendera get cookies or cake?";
  }
  else if (myChoice === "salty") {
    document.getElementById("choice3").style.display="none";
    document.getElementById("submit3").style.display="none";

    document.getElementById("choice5").style.display="block";
    document.getElementById("submit5").style.display="block";


    myQuestion.innerHTML = "Oooooo savory! Should Kendera get breadsticks or chicken wings?";
  }
  else {
    myQuestion.innerHTML = "Invalid Answer";
  }
}

function getChoice4()
{
  var myChoice = document.getElementById("choice4").value;
  var myQuestion = document.getElementById("question");
  if (myChoice === "cookies") {
    myQuestion.innerHTML = "cookies are better than cake. You helped Kendera get a meal for her family, play again";
  }
  else if (myChoice === "cake") {

    myQuestion.innerHTML = "cake is better than cookies. You helped Kendera get a meal for her family, play again";
  }
  else {
    myQuestion.innerHTML = "Invalid Answer";
  }
}

function getChoice5()
{
  var myChoice = document.getElementById("choice5").value;
  var myQuestion = document.getElementById("question");
  if (myChoice === "breadsticks") {

    myQuestion.innerHTML = "yum breadsticks. You helped Kendera get a meal for her family, play again";
  }
  else if (myChoice === "wings") {

    myQuestion.innerHTML = "The wings are a little spicy, but they are good. You helped Kendera get a meal for her family, play again";
  }
  else {
    myQuestion.innerHTML = "Invalid Answer";
  }
}


function myButton(){
  location.reload();
}

function theForLoop()
            {
                for(var i = 0; i < 5; i++)
                {
                    document.write("Pizza!<br>");
                }
            }
