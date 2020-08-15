//User Choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }
    else {
        console.log('Invalid Choice!');
    }
};
//Computer Choice
const getComputerChoice = () => {
const randomNumber = Math.floor(Math.random() * 3);
switch (randomNumber) {
    case 0:
        return 'rock';
    case 1:
        return 'paper';
    case 2:
        return 'scissors';
    break;
}
};
//Determining Winner
const determineWinner = (userChoice, computerChoice) => {
   if (userChoice === computerChoice) {
       return 'Draw!';
   }
   if (userChoice === 'rock') {
       if(computerChoice === 'paper') {
           return 'Computer Wins!';
       }
       else {
           return 'You Win!';
       }
   }
   if (userChoice === 'paper') {
       if (computerChoice === 'scissors') {
           return 'Computer Wins!';
       }
       else {
           return 'You Win!';
       }
   }
   if (userChoice === 'scissors') {
       if (computerChoice === 'rock') {
           return 'Computer Wins!';
       }
       else {
           return 'You Win!';
       }
   }
};
//Output Code
const playGame = () => {
    let userChoice = getUserChoice('scissors');
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    return determineWinner(userChoice, computerChoice);
};
console.log(playGame());