const message = document.querySelector(".message");
const guess = document.querySelector("input");
const button = document.querySelector("button");
const ArrayList = ["ali", "mahdi", "sajede", "sara", "parham", "mania"];
var inplay = false;
let scramble = "";
let scrambled = "";
let score = "0";

button.addEventListener("click", function () {
  if (!inplay) {
    inplay = true;
    score = "0";
    button.innerHTML = "guess";
    guess.classList.toggle("hidden");
    /* The toggle() method toggles between hide() and show() for the selected elements. This method checks the selected elements for visibility. show() is run if an element is hidden. hide() is run if an element is visible - This creates a toggle effect.
     */
    guess.value = "";
    scramble = createWord();
    scrambled = randomArray(scramble.split("")).join("");
    message.innerHTML = scrambled + " <br/>";
  } else {
    score++;
    let tempGuess = guess.value;
    if (tempGuess == scramble) {
      inplay = false;
      message.innerHTML = scramble + " <br/> Correct " + score + " guesses ";
      button.innerHTML = "Start";
      guess.classList.toggle("hidden");
    } else {
      message.innerHTML = scrambled + " <br/> Wrong" + score + "guess";
      guess.value = "";
    }
  }
});

function createWord() {
  let randonNum = Math.floor(Math.random() * ArrayList.length);
  let tempWord = ArrayList[randonNum];
  return tempWord;
}

function randomArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    // تا حالا تونستیم اعضای آرایه یعنی حروف کلمه رو بصورت برعکس نشون بدیم

    // حالا برای هر عضو این آرایه یک عدد رندوم بدست میاریم و اون حرف رو با حرف ان ام آرایه عوض میکنیم
    let j = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
