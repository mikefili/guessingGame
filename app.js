'use strict';

var correctAnswers = 0;
console.log('userName should be undefined:', userName);
var userName = prompt('Welcome to my site. What is your name?');
alert('Thank you for visiting my site, ' + userName + '!');
console.log('userName', userName);

alert('Please respond to the following questions with Y/YES or N/NO');

//first question
function q1() {
  console.log('responseOne should be undefined:', responseOne);
  var responseOne = prompt('Hello, ' + userName + '! Do you think you know me?').toUpperCase();
  if (responseOne === 'Y' || responseOne === 'YES') {
    alert('Just to be sure, let\'s test your knowledge.');
    return correctAnswers++;
  } else {
    alert('Best of luck then!');
  }
  console.log('responseOne', responseOne);
  console.log(correctAnswers);
}

//second question
function q2() {
  console.log('responseTwo should be undefined:', responseTwo);
  var responseTwo = prompt('Was I born in WA state?').toUpperCase();
  if (responseTwo === 'Y' || responseTwo === 'YES') {
    alert('Sorry! I was a California baby.');
  } else {
    alert('You got it! I was a California baby.');
    return correctAnswers++;
  }
  console.log('responseTwo', responseTwo);
  console.log(correctAnswers);
}

//third question
function q3() {
  console.log('responseThree should be undefined:', responseThree);
  var responseThree = prompt('Alright ' + userName + ', is pizza my favorite food?').toUpperCase();
  if (responseThree === 'Y' || responseThree === 'YES') {
    alert('Very good! Maybe you do know me...');
    return correctAnswers++;
  } else {
    alert('I guess you don\'t know me very well...');
  }
  console.log('responseThree', responseThree);
  console.log(correctAnswers);
}

//fourth question
function q4() {
  console.log('responseFour should be undefined:', responseFour);
  var responseFour = prompt('Do I have any pets?').toUpperCase();
  if (responseFour === 'Y' || responseFour === 'YES') {
    alert('Very good! Maybe you do know me...');
    return correctAnswers++;
  } else {
    alert('I guess you don\'t know me very well...');
  }
  console.log('responseFour', responseFour);
  console.log(correctAnswers);
}

// fifth question
function q5() {
  console.log('responseFive should be undefined:', responseFive);
  var responseFive = prompt('On that note, am I a dog person?').toUpperCase();
  if (responseFive === 'Y' || responseFive === 'YES') {
    alert('Very good, ' + userName + '! It sounds like you know me pretty well!');
    return correctAnswers++;
  } else {
    alert('I guess you don\'t know me very well...');
  }
  console.log('responseFive', responseFive);
  console.log(correctAnswers);
}

//sixth question
function q6() {
  var numbGuess = parseInt(prompt('For the next question, please respond with a number, rather than Y/N. Can you guess my favorite number?'));
  var guesses = 3;
  var flag = false;
  while (guesses > 0 && flag === false) {
    guesses--;
    for (var i = 0; i < guesses; i++); {
      console.log('guesses', guesses);
      if (numbGuess === 17) {
        alert('Great work!  It seems like you know me pretty well.');
        flag = true;
        return correctAnswers++;
      } else if (numbGuess > 17) {
        numbGuess = prompt('Your guess was too high. Try again.');
      } else {
        numbGuess = prompt('Your guess was too low. Try again.');
      }
    }
  }
  console.log(correctAnswers);
}

//seventh question
function q7() {
  var possibleAnswers = ['CALIFORNIA', 'MONTANA', 'WASHINGTON', 'NORTH CAROLINA'];
  var guesses2 = 6;
  var flag2 = false;
  while (guesses2 > 0 && flag2 === false) {
    var question = prompt('For this final question, can you guess any of the 4 states I\'ve lived in?').toUpperCase();
    guesses2--;
    for (var j = 0; j <= possibleAnswers.length; j++) {
      console.log('guesses2', guesses2);
      if (question === possibleAnswers[j]) {
        flag2 = true;
      }
    }
    if (flag2 === true) {
      alert('Great work!  It seems like you do know me pretty well.');
      return correctAnswers++;
    } else {
      alert('Nope! I have lived a lot of places, but never there!');
    }
    console.log(correctAnswers);
  }
}

q1();
q2();
q3();
q4();
q5();
q6();
q7();

if (correctAnswers >= 4) {
  alert('You got ' + correctAnswers + ' of the questions right, I guess you know me pretty well!');
} else {
  alert('You only got ' + correctAnswers + ' questions right. I guess you need to spend some more time with me!');
}