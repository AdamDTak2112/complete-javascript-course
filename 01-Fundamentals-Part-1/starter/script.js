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

//added a function to calculate BMI
function calculateBMI(mass, height){
    return  mass / height ** 2;
}
//taking an OOP approach to the challenge: could easily implement into a class
function markHigherBMI(){
    if (calculateBMI(mMass, mHeight) > calculateBMI(jMass, jHeight)){
        return true;
    }
    return false;
}

console.log(markHigherBMI());


const firstName = 'Jonas';
const job = 'Teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
// you can use ``s in place of all ""s and ''s
console.log(`Just a regular string...`);


const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough){
    console.log('Sarah can start driving lessons');
} else{
    console.log(`Sarah cannot drive yet!`);
}


const age = 21;

if (age >= 18){
    console.log("Sarah can start driving license");
}else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;

//ternary operator cheekiness :)
const century = (birthYear <= 2000) ? 20 : 21;

console.log(century);
*/

const mMass = 95;
const mHeight = 1.88;
const jMass = 85;
const jHeight = 1.76;

const mBMI = mMass / mHeight ** 2;

//added a function to calculate BMI
function calculateBMI(mass, height){
    return  mass / height ** 2;
}
//taking an OOP approach to the challenge: could easily implement into a class
function markHigherBMI(){
    if (calculateBMI(mMass, mHeight) > calculateBMI(jMass, jHeight)){
        return true;
    }
    return false;
}

function outputResults(){
    const markBMI = calculateBMI(mMass, mHeight).toFixed(2);
    const johnBMI = calculateBMI(jMass, jHeight).toFixed(2);

    if(markHigherBMI()){
        console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
    } else{
        console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})!`);
    }
}

outputResults();
