const message = document.querySelector(".message");
const guess = document.querySelector("input");
const button = document.querySelector("button");

var inPlay = false;
let score = "0";
let scramble = "";
const ArrayList = ["mahdi", "faranak", "maede", "pejhman", "koohyar"];

button.addEventListener("click", function () {
  if (!inPlay) {
    inPlay = true;
    score="0";
    guess.classList.toggle("hidden");
    guess.value="";
    button.innerHTML = "Guess Now1";
    scrumble = createWord();
    message.innerHTML = scrumble;
    
  } else {
    score++;
    message.innerHTML = scrumble + "<br/>score is: " + score;
    message.style.color = "red";
    let yourGuess = guess.value;
    if (yourGuess == scrumble) {
      message.innerHTML += "<br/><b>hoooooray CORECT</b>";
      message.style.color = "green";
      inPlay = false;
      button.innerHTML = "Restart Game";
      guess.classList.toggle("hidden");
    } else {
      message.innerHTML += "<br/><b>Oops Wrong</b>";
      guess.value = "";
    }
  }
});

function createWord() {
  var randNum = Math.floor(Math.random() * ArrayList.length);
  var randWord = ArrayList[randNum];
  return randWord;
}
