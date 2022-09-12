let correctGuess = false;
const number = 2;
const guess = prompt("Give a number")

if (+guess === number){
  correctGuess = true;
}



if (correctGuess === true){
  console.log("This is True")
}
else{
  console.log(`This is False. The number was ${number}`)
}