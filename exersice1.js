const message = document.querySelector(".message");
const guess = document.querySelector("input");
const button = document.querySelector("button");
var inPlay = false;
let scramble = "";
let scrambled = "";
let score = "0";
const nameArray = ["ali", "fereshte", "maziar", "maral", "niloofar"];

button.addEventListener("click", function () {
  if (!inPlay) {
    inPlay = true;
    score="0";
    button.innerHTML = "Guess Now";
    guess.classList.toggle("hidden");// turn to visible
    guess.value="";
    scramble = createWord(); //---   اسم انتخابی کامپیوتر
    scrambled = randomArray(scramble.split("")).join(""); 
    message.innerHTML = scrambled +" <br/>";
    //------  درهم ریخته شده ی اسم انتخابی

    // تا اینجا آماده سازی برای شروع بازی
  } else { //-- بازی شروع میشه
    score++;
    let yourGuess = guess.value; //---- اسم حدسی ما
    console.log( "your guess is:" + yourGuess);
    if (yourGuess == scramble){
        inPlay = false;
        message.innerHTML = scramble + "<br/> Correct" + score + "guess";
        guess.classList.toggle("hidden"); // turn to invisible
        button.innerHTML = "restart game";
    }
    else{
        message.innerHTML = scrambled + "<br/> wrong" + score + "guess";
        guess.value="";
    }
  }
});

function createWord() {
  var temp = Math.floor(Math.random() * nameArray.length);
  var tempWord = nameArray[temp];
  console.log(tempWord);
  return tempWord;
}

function randomArray(arr){
for (i = nameArray.length -1; i>0; i--){
    let tempw= arr[i];
    let j = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[j];
    arr[j] = tempw;
}
return arr;
}
