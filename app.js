var message = document.querySelector("message");
const guess = document.querySelector("input");
const button = document.querySelector("button");
const ArrayList = ["ali","mahdi","sajede","sara","parham","mania"];
var inplay = false;

button.addEventListener("click", function(){

if (!inplay){
    inplay= true;
    button.innerHTML = "guess";
    guess.classList.toggle("hidden");
    createWord();
}
});

function createWord(){
    var randonNum = Math.floor(Math.random() * ArrayList.length);
    var tempWord = ArrayList[randonNum];
    console.log(tempWord);
    return;
}
