"use strict";

let input = document.querySelector(".input");
let checkButton = document.querySelector(".check");
let scoreplace = document.querySelector(".score");
let highscoreplace = document.querySelector(".highscore");
let theNumber = document.querySelector(".secret-number");
let againButton = document.querySelector(".again");
let hintMessage = document.querySelector(".message");

let Score = 20; /* We are inititalzing the score so we can update it with DOM on the screen */
let HighScore = 0; /* Same as above here */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

checkButton.addEventListener("click", () => {
  let guessnumber = Number(
    input.value
  ); /*using Number() Method because the input comes in string format*/
  if (!guessnumber || guessnumber > 20) {
    alert(
      "Fill a number between 1 and 20"
    ); /*using this on top so if user leave it blank input at press submit, nothing will going to happen*/
  } else if (guessnumber === secretNumber) {
    theNumber.innerText =
      "The secret number is " + secretNumber + " your guess is right";

    document.querySelector("body").style.backgroundColor = "#3FFA52";
    if (Score > HighScore) {
      HighScore = Score;
      highscoreplace.innerText = " your high score: " + HighScore;
    }
  } else if (guessnumber !== secretNumber) {
    hintMessage.innerText =
      guessnumber > secretNumber
        ? " HINT: number is too high try below it."
        : " HINT: number is two low try above it.";
    Score--;
    scoreplace.innerText = "Score: " + Score;
  }
});

againButton.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  /*Had to generate the random number again so user get new number */
  console.log(secretNumber);
  Score = 20;
  scoreplace.innerText = "Score: " + Score;
  input.value = "";
  document.querySelector("body").style.backgroundColor = "";
});
