function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
  //first choices
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "Mari is thinking about changing up her look. what should she change?";
        document.getElementById("choice1").innerHTML = "Her hair";
        document.getElementById("choice2").innerHTML = "Her Makeup";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "You are going to play whether you like it or not.";
        document.getElementById("choice1").innerHTML = "Play Again!";
        document.getElementById("choice2").innerHTML = "Restart";

    //Hair Quest//
} else if (choice == 1 && answer1 == "Her hair") {
        document.getElementById("story").innerHTML = "What hair color should Mari do?";
        document.getElementById("choice1").innerHTML = "Blue";
        document.getElementById("choice2").innerHTML = "Pink";

      } else if (choice == 2 && answer2 == "Her Makeup") {
        document.getElementById("story").innerHTML = "What color eyeshadow should Mari wear?";
        document.getElementById("choice1").innerHTML = "Purple";
        document.getElementById("choice2").innerHTML = "pink";

//hair her hair,  2nd choices
} else if (choice == 1 && answer1 == "Blue") {
        window.location="game2.html";

    } else if (choice == 2 && answer2 == "Pink") {
        window.location="game3.html";

// hair does she look good blue, 3rd choice
} else if (choice == 1 && answer1 == "Yes she does") {
  document.getElementById("story").innerHTML =  "Should she wear it up or down?";
  document.getElementById("choice1").innerHTML = "UP";
  document.getElementById("choice2").innerHTML = "Down";

    } else if (choice == 2 && answer2 == "No she doesn't") {
        window.location="game4.html";
// hair does she look good pink, 3rd choice
} else if (choice == 1 && answer1 == "Yes she looks good") {
        document.getElementById("story").innerHTML =  "Should she wear it up or down?";
        document.getElementById("choice1").innerHTML = "Wear it up";
        document.getElementById("choice2").innerHTML = "Wear it down";

      } else if (choice == 2 && answer2 == "No she does not") {
              window.location="game5.html";

//hair her hair blue,  4th choices
} else if (choice == 1 && answer1 == "UP") {
              window.location="style1.html";

} else if (choice == 2 && answer2 == "Down") {
              window.location="style2.html";

  //hair her hair pink,  4th choices
} else if (choice == 1 && answer1 == "Wear it up") {
              window.location="style3.html";

} else if (choice == 2 && answer2 == "Wear it down") {
              window.location="style4.html";

//yes her eyes Makeup,  2nd choices
} else if (choice == 1 && answer1 == "Purple") {
              window.location="game6.html";

} else if (choice == 2 && answer2 == "pink") {
              window.location="game7.html";


//yes her lip Makeup,  3rd choices
} else if (choice == 1 && answer1 == "Red.") {
              window.location="game8.html";

} else if (choice == 2 && answer2 == "Pink.") {
              window.location="game9.html";
//yes Makeup purple fourth choice
} else if (choice == 1 && answer1 == "She looks gorgous") {
        document.getElementById("story").innerHTML =  "Thanks for the help Mari enjoys her new look. Play Again!";
        document.getElementById("choice1").innerHTML = "Play Again!";
        document.getElementById("choice2").innerHTML = "Restart";

} else if (choice == 2 && answer2 == "She looks ugly") {
        window.location="game12.html";



//yes Makeup purple fourth chouce
} else if (choice == 1 && answer1 == "She looks good") {
        document.getElementById("story").innerHTML =  "Thanks for the help Mari enjoys her new look. Play Again!";
        document.getElementById("choice1").innerHTML = "Play Again!";
        document.getElementById("choice2").innerHTML = "Restart";

} else if (choice == 2 && answer2 == "No she looks ugly") {
        window.location="game12.html";


//yes Makeup pink eyes blush choice
} else if (choice == 1 && answer1 == "She should wear red") {
              window.location="game10.html";

} else if (choice == 2 && answer2 == "She should wear pink") {
              window.location="game11.html";

// choices in all to restart
} else if (choice == 1 && answer1 == "Play Again!") {

    window.location="index.html";

    } else if (choice == 2 && answer2 == "Restart") {

        window.location="index.html";




    }


}
