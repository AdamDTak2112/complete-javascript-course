/*let country = "USA";
let continent = "North America";
let population = 328200000;
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//let if you need to change variables
let age = 30;
age = 31;
//const if the variable does not change in program
const birthYear = 1991;
const job;

//DO NOT USE VAR
var job = 'programmer';
job = 'teacher';

const mMass = 95;
const mHeight = 1.88;
const jMass = 85;
const jHeight = 1.76;

const mBMI = mMass / mHeight ** 2;

function calculateBMI(mass, height){
    return  mass / height ** 2;
}
function markHigherBMI(){
    if (calculateBMI(mMass, mHeight) > calculateBMI(jMass, jHeight)){
        return true;
    }
    return false;
}

console.log(markHigherBMI());
*/

const firstName = 'Jonas';
const job = 'Teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);