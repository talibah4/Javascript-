
//Ask user which option they want to choose
//Use Math.random()to generate a random choice by computer 


var userChoice = prompt("Do you choose rock, paper, or scissors?");
var computerChoice = Math.random();

//Translate the random number into either Rock, Paper, or Scissors depending on the result

if (0 <= computerChoice < 0.33){
    computerChoice = "rock";
}
else if (.34 < computerChoice < 0.66){
    computerChoice = "paper";
}
 else{
    computerChoice = "scissors";
}

//Function to compare the two choices made and return the winning choice
//All scenarios for choice 1 and choice 2 are considered
//If choice 1 and 2 are  equal, the game ends in a tie

var compare = function(choice1, choice2){
    if (choice1 === choice2){
        return "The result is a tie!"
    }
	
	    else if (choice1 === rock){
        if (choice2 === "scissors"){
            return "rock wins"
        }
        else{
            "paper wins"
        }
    }
	
	    else if (choice1 === paper){
        if (choice2 === "rock"){
            return "paper wins wins"
        }
        else {
            "scissor wins"
        }
    }
	
	     else if (choice1 === scissors){
        if (choice2 === "rock"){
            return "rock wins"
        }
        else {
            "scissor wins"
        }
    }
};

compare(userChoice, computerChoice);