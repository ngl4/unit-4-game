//Crystal Collector Game

var winNum = 0;
var loseNum = 0;
var totalScoreNum = 0;
var randomNum;
var gameStarted = false;
var clicksTotalArr = [];
var crystalBlueNum;
var crystalRedNum;
var crystalYellowNum;
var crystalGreenNum;

$(document).ready(function() {
  startGame();

  //Buttons click for each crystal

  $("#crystal-red-img").on("click", function() {
    console.log((totalScoreNum += crystalRedNum));
    console.log(totalScoreNum);
    $("#total-score-num").text(totalScoreNum);

    if (totalScoreNum === randomNum) {
      winNum++;
      console.log(winNum);
      $("#win-num").text(winNum);
      $("#win-lose-message").text("You Win!!!");
      startGame();
    } else if (totalScoreNum > randomNum) {
      loseNum++;
      console.log(loseNum);
      $("#lose-num").text(loseNum);
      $("#win-lose-message").text("You Lose!!!");
      startGame();
    }
  });

  $("#crystal-blue-img").on("click", function() {
    console.log((totalScoreNum += crystalBlueNum));
    console.log(totalScoreNum);
    $("#total-score-num").text(totalScoreNum);

    if (totalScoreNum === randomNum) {
      winNum++;
      console.log(winNum);
      $("#win-num").text(winNum);
      $("#win-lose-message").text("You Win!!!");
      startGame();
    } else if (totalScoreNum > randomNum) {
      loseNum++;
      console.log(loseNum);
      $("#lose-num").text(loseNum);
      $("#win-lose-message").text("You Lose!!!");
      startGame();
    }
  });

  $("#crystal-yellow-img").on("click", function() {
    console.log((totalScoreNum += crystalYellowNum));
    console.log(totalScoreNum);
    $("#total-score-num").text(totalScoreNum);

    if (totalScoreNum === randomNum) {
      winNum++;
      console.log(winNum);
      $("#win-num").text(winNum);
      $("#win-lose-message").text("You Win!!!");
      startGame();
    } else if (totalScoreNum > randomNum) {
      loseNum++;
      console.log(loseNum);
      $("#lose-num").text(loseNum);
      $("#win-lose-message").text("You Lose!!!");
      startGame();
    }
  });

  $("#crystal-green-img").on("click", function() {
    console.log((totalScoreNum += crystalGreenNum));
    console.log(totalScoreNum);
    $("#total-score-num").text(totalScoreNum);

    if (totalScoreNum === randomNum) {
      winNum++;
      console.log(winNum);
      $("#win-num").text(winNum);
      $("#win-lose-message").text("You Win!!!");
      startGame();
    } else if (totalScoreNum > randomNum) {
      loseNum++;
      console.log(loseNum);
      $("#lose-num").text(loseNum);
      $("#win-lose-message").text("You Lose!!!");
      startGame();
    }
  });
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
  ) {
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
    $("#total-score-num").text(totalScoreNum);
  }
}

