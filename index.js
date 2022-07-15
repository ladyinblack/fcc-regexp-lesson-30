// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Check For Mixed Grouping of Characters</h1>`;

/** TODO:
 * Find the regex so that it checks for the namse of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.
 * Then fix the code so that the regexthat you have created is checked against myString and either true or false is returned depending on whether the regex matches.
 
 let myString = "Eleanor Roosevelt";
 let myRegex = /False/;      // Change this line 
 let result = false;       // Change this line 
 // After passing the challenge experiment with myString and see how the grouping works
 */

function IsRoosevelt(myString) {
  let myRegex = /(Franklin D.|Eleanor) Roosevelt/i;
  return myRegex.test(myString);
}

console.log(IsRoosevelt('Franklin D. Roosevelt'));
console.log(IsRoosevelt('Eleanor Roosevelt'));
console.log(IsRoosevelt('Franklin Roosevelt'));
console.log(IsRoosevelt('Frank Roosevelt'));
