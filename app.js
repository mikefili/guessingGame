// "use strict";

var correctAnswers = 0;
var incorrectAnswers = 0;
// console.log('userName should be undefined:', userName);
// var userName = prompt('Welcome to my site. What is your name?');
// alert('Thank you for visiting my site, ' + userName + '!');
// console.log('userName', userName);

// alert('Please respond to the following questions with Y/YES or N/NO');

// console.log('responseOne should be undefined:', responseOne);
// var responseOne = prompt('Hello, ' + userName + '! Do you think you know me?').toUpperCase();
// if (responseOne === 'Y' || responseOne === 'YES') {
//   alert('Just to be sure, let\'s test your knowledge.');
//   correctAnswers++;
// } else {
//   alert('Best of luck then!');
//   incorrectAnswers++;
// }
// console.log('responseOne', responseOne);

// console.log(correctAnswers);
// console.log(incorrectAnswers);

// console.log('responseTwo should be undefined:', responseTwo);
// var responseTwo = prompt('Was I born in WA state?').toUpperCase();
// if (responseTwo === 'Y' || responseTwo === 'YES') {
//   alert('Sorry! I was a California baby.');
//   incorrectAnswers++;
// } else {
//   alert('You got it! I was a California baby.');
//   correctAnswers++;
// }
// console.log('responseTwo', responseTwo);

// console.log(correctAnswers);
// console.log(incorrectAnswers);

// console.log('responseThree should be undefined:', responseThree);
// var responseThree = prompt('Alright ' + userName + ', is pizza my favorite food?').toUpperCase();
// if (responseThree === 'Y' || responseThree === 'YES') {
//   alert('Very good! Maybe you do know me...');
//   correctAnswers++;
// } else {
//   alert('I guess you don\'t know me very well...');
//   incorrectAnswers++;
// }
// console.log('responseThree', responseThree);

// console.log(correctAnswers);
// console.log(incorrectAnswers);

// console.log('responseFour should be undefined:', responseFour);
// var responseFour = prompt('Do I have any pets?').toUpperCase();
// if (responseFour === 'Y' || responseFour === 'YES') {
//   alert('Very good! Maybe you do know me...');
//   correctAnswers++;
// } else {
//   alert('I guess you don\'t know me very well...');
//   incorrectAnswers++;
// }
// console.log('responseFour', responseFour);

// console.log(correctAnswers);
// console.log(incorrectAnswers);

// console.log('responseFive should be undefined:', responseFive);
// var responseFive = prompt('On that note, am I a dog person?').toUpperCase();
// if (responseFive === 'Y' || responseFive === 'YES') {
//   alert('Very good, ' + userName + '! It sounds like you know me pretty well!');
//   correctAnswers++;
// } else {
//   alert('I guess you don\'t know me very well...');
//   incorrectAnswers++;
// }
// console.log('responseFive', responseFive);

// console.log(correctAnswers);
// console.log(incorrectAnswers);

var numbGuess = prompt('For the next question, please respond with a number, rather than Y/N. Can you guess my favorite number?');
var guesses = 3;
var flag = false;
while (guesses > 0 && flag === false) {
  guesses--;
  for (var i = 0; i < guesses; i++); {
    console.log('guesses', guesses);
    if (numbGuess === 17) {
      alert('Great work!  It seems like you know me pretty well.');
      flag = true;
      correctAnswers++;
      break;
    } else if (numbGuess > 17) {
      numbGuess = parseInt(prompt('Your guess was too high. Try again.'));
      incorrectAnswers++;
    } else {
      numbGuess = parseInt(prompt('Your guess was too low. Try again.'));
      incorrectAnswers++;
    }
  }
}

console.log(correctAnswers);
console.log(incorrectAnswers);

// var possibleAnswers = ['CALIFORNIA', 'MONTANA', 'WASHINGTON', 'NORTH CAROLINA'];
// var question = prompt('For this final question, can you guess any of the 4 states I\'ve lived in?').toUpperCase();
// var guesses = 5;
// var flag = false;
// while (guesses > 0 && flag === false) {
//   guesses--;
//   for (var j = 0; j < possibleAnswers.length; j++); {
//     console.log('guesses', guesses);
//     if (question === possibleAnswers[j]) {
//       alert('Great work!  It seems like you do know me pretty well.');
//       flag = true;
//       break;
//     } else if (question !== correctAnswers[j]) {
//       question = parseInt(prompt('Nope! I have lived a lot of places, but never there!'));
//     }
//   }
// }

// console.log(correctAnswers);
// console.log(incorrectAnswers);