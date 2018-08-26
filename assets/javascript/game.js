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

//Once the document is fully loaded, this game will start!
$(document).ready(function() {
  startGame();

  //Buttons click for each crystal
  $("#crystal-red-img").on("click", function() {
    totalScoreNum += crystalRedNum;
    $("#total-score-num").text(totalScoreNum);
    $("#win-lose-message").text(""); //to remove You Win or You Lose message
    setWinLose();
  });

  $("#crystal-blue-img").on("click", function() {
    totalScoreNum += crystalBlueNum;
    $("#total-score-num").text(totalScoreNum);
    $("#win-lose-message").text("");
    setWinLose();
  });

  $("#crystal-yellow-img").on("click", function() {
    totalScoreNum += crystalYellowNum;
    $("#total-score-num").text(totalScoreNum);
    $("#win-lose-message").text("");
    setWinLose();
  });

  $("#crystal-green-img").on("click", function() {
    totalScoreNum += crystalGreenNum;
    $("#total-score-num").text(totalScoreNum);
    $("#win-lose-message").text("");
    setWinLose();
  });
});

//function to start the game
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
  //total score number is set to Zero
  totalScoreNum = 0;
  $("#total-score-num").text(totalScoreNum);
}

//Function to determine win or lose and then restart the game without changing the win or lose number(s)
function setWinLose() {
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
}
