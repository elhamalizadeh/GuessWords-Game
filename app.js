var message = document.querySelector("message");
const guess = document.querySelector("input");
const button = document.querySelector("button");
const ArrayList = ["ali", "mahdi", "sajede", "sara", "parham", "mania"];
var inplay = false;

button.addEventListener("click", function () {
  if (!inplay) {
    inplay = true;
    button.innerHTML = "guess";
    guess.classList.toggle("hidden");
    /* The toggle() method toggles between hide() and show() for the selected elements. This method checks the selected elements for visibility. show() is run if an element is hidden. hide() is run if an element is visible - This creates a toggle effect.
     */
    createWord();
  }
});

function createWord() {
  let randonNum = Math.floor(Math.random() * ArrayList.length);
  let tempWord = ArrayList[randonNum];
  console.log(tempWord);
console.log(tempWord.split(""));
  let rand = randomArray(tempWord.split(""));
  console.log(rand);
}

function randomArray(arr){
    for( i=arr.length-1;i>0;i--){
        console.log(arr[i]);
    }
}