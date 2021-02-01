function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
  //first choices
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "A unicorn approaches you, what do you do?";
        document.getElementById("choice1").innerHTML = "Pet it";
        document.getElementById("choice2").innerHTML = "Stab it";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "You are going to play whether you like it or not. Your quest is you find a sword in the ground. What do you you do?";
        document.getElementById("choice1").innerHTML = "Leave it";
        document.getElementById("choice2").innerHTML = "Attempt to pull it out of the ground";

    //yes Quest//
} else if (choice == 1 && answer1 == "Pet it") {
        document.getElementById("story").innerHTML = "You have now gained a new friend, but a nymth comes and takes your unicorn away. What do you do?";
        document.getElementById("choice1").innerHTML = "Do nothing";
        document.getElementById("choice2").innerHTML = "Fight the nymth";

      } else if (choice == 2 && answer2 == "Stab it") {
        document.getElementById("story").innerHTML = "You MONSTER!!! How could you hurt this magnificent creature?! The unicorn screams and gets angry. It turns it's head and stabs you back and you die.";
        document.getElementById("choice1").innerHTML = "Play Again!";
        document.getElementById("choice2").innerHTML = "Restart";

//yes Pet it,  2nd choices
} else if (choice == 1 && answer1 == "Do nothing") {
        document.getElementById("story").innerHTML = "You lost your friend because you don't care enough to save your friend.";
        document.getElementById("choice1").innerHTML = "Play Again!";
        document.getElementById("choice2").innerHTML = "Restart";

    } else if (choice == 2 && answer2 == "Fight the nymth") {
        document.getElementById("story").innerHTML =  "You fight the nymth because you do not want to lose your unicorn, but the nymth that you are going up against is a fire nymth. You need to use a weapon that with defeat it. Which weapon do you use?";
        document.getElementById("choice1").innerHTML = "Water sword";
        document.getElementById("choice2").innerHTML = "Ice sword";

// yes fight nymth, 3rd choice
} else if (choice == 1 && answer1 == "Water sword") {
        document.getElementById("story").innerHTML = "Victory! You have put out the flame with your water sword. The nymth dies and you get your unicorn back. You Win!!. Play Again!";
        document.getElementById("choice1").innerHTML = "Play Again!";
        document.getElementById("choice2").innerHTML = "Restart";

    } else if (choice == 2 && answer2 == "Ice sword") {
        document.getElementById("story").innerHTML =  "You picked the wrong weapon. The nymth has melted your sword away and has burned you to smitherings. You are now dead.";
        document.getElementById("choice1").innerHTML = "Play Again!";
        document.getElementById("choice2").innerHTML = "Restart";


//No quest//
} else if (choice == 1 && answer1 == "Leave it") {
        document.getElementById("story").innerHTML = "Since you left the sword, there is nothing else to do but restart";
        document.getElementById("choice1").innerHTML = "Play Again!";
        document.getElementById("choice2").innerHTML = "Restart";

    } else if (choice == 2 && answer2 == "Attempt to pull it out of the ground") {
        document.getElementById("story").innerHTML = "It took a lot of your strength, but you were able to pull the sword out of the ground. Once you pulled it out of the ground an army of gnomes jumps out of the forest and they start to yell and run towards you with weapons. What do you do? ";
        document.getElementById("choice1").innerHTML = "Stand and fight them";
        document.getElementById("choice2").innerHTML = "Run";


      } else if (choice == 1 && answer1 == "Stand and fight them") {
              document.getElementById("story").innerHTML = "You bravely stand and fight against these 10 inche vicious beast. You slice them with your holy ground sword and defeat the gnomes. Victory to you.";
              document.getElementById("choice1").innerHTML = "Play Again!";
              document.getElementById("choice2").innerHTML = "Restart";

          } else if (choice == 2 && answer2 == "Run") {
              document.getElementById("story").innerHTML = "Don't be fooled. Gnomes are actually quite fast and very vicious. You tried to out run them, but they caught up to you. They jump on you and rip you to shreds. You are now dead. ";
              document.getElementById("choice1").innerHTML = "Play Again!";
              document.getElementById("choice2").innerHTML = "Restart";



// choices in all to restart
} else if (choice == 1 && answer1 == "Play Again!") {
        document.getElementById("story").innerHTML = "You are a traveler from a far land and you have now entered a land of wonder. Are you ready to start your magical and myhtical adventure?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";

    } else if (choice == 2 && answer2 == "Restart") {
        document.getElementById("story").innerHTML = "You are a traveler from a far land and you have now entered a land of wonder. Are you ready to start your magical and myhtical adventure?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";



    }


}
