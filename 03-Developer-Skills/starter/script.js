// Remember, we're gonna use strict mode in all scripts now!
'use strict';


/*
const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1991));
*/

//4 steps to solve any problem
//1. Make sure you understand the problem 100%. Ask the right questions to get a clear picture of the problem.
//  ex. Project Manager: "We need a function that reverses whatever we pass into it"
//  1. what does whatever mean? what is being passed in?
//  2. What do we do if something unexpected passes in?
//  3. What should be returned?
//  4. What does "reversed" mean in this context?
//  5. How to recognize what type the argument is
//  6. How to reverse something of any type

//2. Divide and conquer: Break a big problem into smaller sub-problems
//  sub problems:
//  1. check if argument is a number, a string, or an array
//  2. Implement reversing a number
//  3. Implement reversing a string
//  4. Implement reversing an array
//  5. Return reversed value

//3. Research as much as you need to
//  Research is a vital part of development

//4. Write pseudo-code before writing actual code, for bigger problems

// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be sensor error".

const tempteratures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem
// - What is temperature amplitude? Difference between lowest and highest numbers in array
// - How to calculate max and min temperatures?
// - What is sensor error? What to do when it occurs?

// 2) Breaking up into sub-problems
// - Ignore sensor errors
// - Find max value in temp array
// - Find min value in temp array
// - Find difference of max and min

const calcTempAmp = function (temps) {
    const maxTemp = Math.max(...temps);
    console.log(temps);
    const minTemp = Math.min(...temps);
    console.log(minTemp);
    const amplitude = maxTemp - minTemp;
    return amplitude;
}
console.log(calcTempAmp([3, 7, 4]));