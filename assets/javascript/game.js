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
    totalScoreNum += crystalRedNum;
    $("#total-score-num").text(totalScoreNum);

    if (totalScoreNum === randomNum) {
      winNum++;
      $("#win-num").text(winNum);
      $("#win-lose-message").text("You Win!!!");
      startGame();
    } else if (totalScoreNum > randomNum) {
      loseNum++;
      $("#lose-num").text(loseNum);
      $("#win-lose-message").text("You Lose!!!");
      startGame();
    }
  });

  $("#crystal-blue-img").on("click", function() {
    totalScoreNum += crystalBlueNum;
    $("#total-score-num").text(totalScoreNum);

    if (totalScoreNum === randomNum) {
      winNum++;
      $("#win-num").text(winNum);
      $("#win-lose-message").text("You Win!!!");
      startGame();
    } else if (totalScoreNum > randomNum) {
      loseNum++;
      $("#lose-num").text(loseNum);
      $("#win-lose-message").text("You Lose!!!");
      startGame();
    }
  });

  $("#crystal-yellow-img").on("click", function() {
    totalScoreNum += crystalYellowNum;
    $("#total-score-num").text(totalScoreNum);

    if (totalScoreNum === randomNum) {
      winNum++;
      $("#win-num").text(winNum);
      $("#win-lose-message").text("You Win!!!");
      startGame();
    } else if (totalScoreNum > randomNum) {
      loseNum++;
      $("#lose-num").text(loseNum);
      $("#win-lose-message").text("You Lose!!!");
      startGame();
    }
  });

  $("#crystal-green-img").on("click", function() {
    totalScoreNum += crystalGreenNum;
    $("#total-score-num").text(totalScoreNum);

    if (totalScoreNum === randomNum) {
      winNum++;
      $("#win-num").text(winNum);
      $("#win-lose-message").text("You Win!!!");
      startGame();
    } else if (totalScoreNum > randomNum) {
      loseNum++;
      $("#lose-num").text(loseNum);
      $("#win-lose-message").text("You Lose!!!");
      startGame();
    }
  });
});

function startGame() {
  gameStarted = true;

  // At the start of the game, random number is generated
  randomNum = 19 + Math.floor(Math.random() * 120);
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
    crystalBlueNum = 1 + Math.floor(Math.random() * 12);
    crystalYellowNum = 1 + Math.floor(Math.random() * 12);
    crystalGreenNum = 1 + Math.floor(Math.random() * 12);
  }

  if (
    crystalRedNum !== crystalBlueNum &&
    crystalRedNum !== crystalYellowNum &&
    crystalRedNum !== crystalGreenNum &&
    crystalBlueNum !== crystalYellowNum &&
    crystalBlueNum !== crystalGreenNum &&
    crystalYellowNum !== crystalGreenNum
  ) {
    crystalRedNum;
    crystalBlueNum;
    crystalYellowNum;
    crystalGreenNum;

    //total score number is set to Zero
    totalScoreNum = 0;
    $("#total-score-num").text(totalScoreNum);
  }
}
