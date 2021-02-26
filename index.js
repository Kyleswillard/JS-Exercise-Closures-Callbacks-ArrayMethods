// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * A: For counter 1 the count variable is private and inside of the function. Also the counter 1 will store the previous count when it returns the total. 
 * 2. Which of the two uses a closure? How can you tell?
 * A: counter1 uses closure. Because of the nested function.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *  Counter 1 is a cleaner, more DRY, and leverages Closure. Counter2 creates a global variable, instead of a block level variable, meaning that its memory usage is higher, and there is no valid reason to create a global scope variable for this to work. 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
const numGenerator =  Math.floor(Math.random() * 3)
return numGenerator
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, num) {
  let team1 = [];
  let team2 = [];

  //filling both team arrays
  for (let i = 0; i < num; i++) {
    team1.push(inning(num));
  }

  for (let i = 0; i < num; i++) {
    team2.push(inning(num));
  }
  
 const final = {
    home: team1.reduce((total, inning) => total + inning),
    away: team2.reduce((total, inning) => total + inning)
  };
  return final;
}

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(getInningScore, inning, num) {
  const final = {home: 0,
                away:0}
  for (let i = 0; i < num; i++) {
    final.home += inning();
    final.away += inning();
    
    getInningScore(i, final)
  }
  return final
}

function newScoreBoard (inning, scoreboard) {
  console.log(`Inning ${inning}: Home: ${scoreboard.home} - Away: ${scoreboard.away}`)
}

scoreboard(newScoreBoard, inning, 9)