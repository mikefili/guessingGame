"use strict";

console.log('userName should be undefined:', userName);

var userName = prompt('Welcome to my site. What is your name?');
alert('Thank you for visiting my site, ' + userName + '!');
console.log('userName', userName);

alert('Please respond to the following questions with Y/YES or N/NO');

console.log('responseOne should be undefined:', responseOne);

var responseOne = prompt('Hello, ' + userName + '! Do you think you know me?').toUpperCase();

if (responseOne === 'Y' || responseOne === 'YES') {
  alert('Just to be sure, let\'s test your knowledge.');
} else {
  alert('Best of luck then!')
}
console.log('responseOne', responseOne);

console.log('responseTwo should be undefined:', responseTwo);

var responseTwo = prompt('Was I born in WA state?').toUpperCase();

if (responseTwo === 'Y' || responseTwo === 'YES') {
  alert('Sorry! I was a California baby.');
} else {
  alert('You got it! I was a California baby.');
}
console.log('responseTwo', responseTwo);

console.log('responseThree should be undefined:', responseThree);

var responseThree = prompt('Alright ' + userName + ', is pizza my favorite food?').toUpperCase();

if (responseThree === 'Y' || responseThree === 'YES') {
  alert('Very good! Maybe you do know me...');
} else {
  alert('I guess you don\'t know me very well...');
}
console.log('responseThree', responseThree);

console.log('responseFour should be undefined:', responseFour);

var responseFour = prompt('Do I have any pets?').toUpperCase();

if (responseFour === 'Y' || responseFour === 'YES') {
  alert('Very good! Maybe you do know me...');
} else {
  alert('I guess you don\'t know me very well...');
}
console.log('responseFour', responseFour);

console.log('responseFive should be undefined:', responseFive);

var responseFive = prompt('On that note, am I a dog person?').toUpperCase();

if (responseFive === 'Y' || responseFive === 'YES') {
  alert('Very good, ' + userName + '! It sounds like you know me pretty well!');
} else {
  alert('I guess you don\'t know me very well...');
}
console.log('responseFive', responseFive);