//Crystal Collector Game

var winNum = 0;
var loseNum = 0;
var totalScoreNum = 0;
var randomNum;
var gameStarted = false;
var crystalBlueNum;
var crystalRedNum;
var crystalYellowNum;
var crystalGreenNum;

$(document).ready(function() {

    startGame();

    $("#crystal-red-img").on("click", function() {

      console.log(totalScoreNum += crystalRedNum);
      console.log(totalScoreNum);
      $("#total-score-num").text(totalScoreNum);


    });

    $("#crystal-blue-img").on("click", function() {

      console.log(totalScoreNum += crystalBlueNum);
      console.log(totalScoreNum);
      $("#total-score-num").text(totalScoreNum);


    });

    $("#crystal-yellow-img").on("click", function() {

      console.log(totalScoreNum += crystalYellowNum);
      console.log(totalScoreNum);
      $("#total-score-num").text(totalScoreNum);

    });

    $("#crystal-green-img").on("click", function() {

      console.log(totalScoreNum += crystalGreenNum);
      console.log(totalScoreNum);
      $("#total-score-num").text(totalScoreNum);
    });

    //WINS
//When total score num === the random number, win-num ++
//id = "win-lose-message"
//Display statement: "You Win!"
//restart the game: generate a new random number; and crystal regenerated hidden value
//WINS number should NOT BE CHANGING


if (totalScoreNum === randomNum) {
  winNum++;
  console.log("Hey total is: " + totalScoreNum);
  console.log(winNum);

  //$("#win-num").text(winNum);
  //$("#win-lose-message").text("You Win!!!");
}else {
  loseNum--;
  $("#lose-num").text(loseNum);
  $("#win-lose-message").text("You Win!!!");
}

//LOSES
//When total score num > the random number, lose-num ++
//id = "win-lose-message"
//Display statement: "You Lose!"
//restart the game: generate a new random number; and crystal regenerated hidden value
//LOSES number should NOT BE CHANGING

  });

function startGame() {
  console.log("This game has started");
  gameStarted = true;

  // At the start of the game, random number is generated
  randomNum = 19 + Math.floor(Math.random() * 120);
  console.log(randomNum); 
  $("#random-num-box").text(randomNum);

  //At the start of the game, the crystals are assigned with a random hidden value
  //Each crystal cannot generate the same hidden value
  while (
    crystalRedNum === crystalBlueNum ||
    crystalRedNum === crystalYellowNum ||
    crystalRedNum === crystalGreenNum ||
    crystalBlueNum === crystalYellowNum ||
    crystalBlueNum === crystalGreenNum ||
    crystalYellowNum === crystalGreenNum
  )
  {
    crystalRedNum = 1 + Math.floor(Math.random() * 12);
    console.log("The Red Crystal is: " + crystalRedNum);
    crystalBlueNum = 1 + Math.floor(Math.random() * 12);
    console.log("The Blue Crystal is: " + crystalBlueNum);
    crystalYellowNum = 1 + Math.floor(Math.random() * 12);
    console.log("The Yellow Crystal is: " + crystalYellowNum);
    crystalGreenNum = 1 + Math.floor(Math.random() * 12);
    console.log("The Green Crystal is: " + crystalGreenNum);
  }

  if (
    crystalRedNum !== crystalBlueNum &&
    crystalRedNum !== crystalYellowNum &&
    crystalRedNum !== crystalGreenNum &&
    crystalBlueNum !== crystalYellowNum &&
    crystalBlueNum !== crystalGreenNum &&
    crystalYellowNum !== crystalGreenNum 
  ) {

    console.log("Red Crystal is: " + crystalRedNum); 
    console.log("Blue Crystal is: " + crystalBlueNum);
    console.log("Yellow Crystal is: " + crystalYellowNum);
    console.log("Green Crystal is: " + crystalGreenNum);


    //total score number is set to Zero
    totalScoreNum = 0;
    

  }
}

//Gaming

//html id="random-num-box"
//When win or lose, random number is generated again
//random number should be between 19 - 120.

//html id="crystal-red-box"; "crystal-blue-box"; "crystal-yellow-box"; "crystal-green-box"
//When win or lose, the hidden value of each crystal is regenerated with a new random hidden value
//Each crystal should have a random hidden value between 1 - 12
//Buttons' click function for each crystals
//When a button is clicked, the hidden value will add to the total score

//html id="total-score-num"
//Compare total score number (in the total-score-num) with computer generated random number (in the random-num-box)


