const prompt = require('prompt-sync')();
const username = prompt("Enter your username:")
let point = 0;
let stage = 1;
let lives = 3;
console.log(`Stage ${stage} || lives: ${lives} || point: ${point}`);
let range = prompt("Guess a number between 1 and 2 inclusive");

function numberGuessGame(range){
  let max = 2;
  let randomNumber = Math.floor(Math.random() * max) + 1;
  while(lives > 0){
    if (Number(range) === randomNumber){
      point +=1;
      max +=1;
      stage+=1;
      randomNumber = Math.floor(Math.random() * max) + 1
      console.log(`You guess right`)
      console.log(`Stage ${stage} || lives: ${lives} || point: ${point}`);
      range = prompt(`Guess a number between 1 and ${max} inclusive`);
    } else if (Number(range) > max) {
      console.log(`Oops!!! ${username}, number entered(${range}) is grater than ${max}, kindly enter a number between 1 and ${max}`)
      lives-=1;
      console.log(`Stage ${stage} || lives: ${lives} || point: ${point}`);
      range = prompt(`Guess another number between 1 and ${max} inclusive`);
    } else if(Number(range) !== randomNumber){
      console.log(`Oops!!! ${username}, number entered (${range}) is wrong, the correct number is ${randomNumber}`);
      lives-=1;
      randomNumber = Math.floor(Math.random() * max) + 1
      console.log(`Stage ${stage} || lives: ${lives} || point: ${point}`);
      range = prompt(`Guess a number between 1 and ${max} inclusive`); 
    }
    };
    console.log(`Oops!!! You guess wrong, correct number is ${randomNumber} \nYou have exceeded your lives \nPlayer ${username}, your total point is ${point}`)
  
}

numberGuessGame(range);