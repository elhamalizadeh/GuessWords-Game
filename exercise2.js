const message = document.querySelector(".message");
const guess = document.querySelector("input");
const button = document.querySelector("button");

var inPlay = false;
let score = "0";
let scramble = "";
const ArrayList = ["mahdi", "faranak", "maede", "pejhman", "koohyar"];
const img = document.getElementById("congrats");


button.addEventListener("click", function () {
  if (!inPlay) {
    inPlay = true;
    score="0";
    guess.classList.toggle("hidden");
    guess.value="";
    button.innerHTML = "Guess Now1";
    scrumble = createWord();
    scrumbled = randomArray(scrumble.split("")).join("");
    message.innerHTML = scrumbled;
    img.src = "";
    
  } else {
    score++;
   // message.innerHTML = "<h1>"+ scrumbled +"</h1><br/>score is: " + score;
    message.style.color = "red";
    let yourGuess = guess.value;
    if (yourGuess == scrumble) {
      message.innerHTML = "<h2>"+scrumble + "</h2>score is: " + score +"<br/><h1>hoooooray CORECT</h1>";
      message.style.color = "green";
      inPlay = false;
      button.innerHTML = "Restart Game";
      guess.classList.toggle("hidden");
      img.src = "./assets/images/Congratulations.gif";
    } else {
      message.innerHTML ="<h2>"+ scrumbled + "</h2>score is: " + score +"<br/><b>Oops Wrong</b>";
      guess.value = "";
    }
  }
});

function createWord() {
  var randNum = Math.floor(Math.random() * ArrayList.length);
  var randWord = ArrayList[randNum];
  return randWord;
}

function randomArray(arr){
    for(var i = arr.length; i>0 ; i--){
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i+1));
        arr[i]= arr[j];
        arr[j]= temp;
        console.log(arr);
        return arr;
    }
}