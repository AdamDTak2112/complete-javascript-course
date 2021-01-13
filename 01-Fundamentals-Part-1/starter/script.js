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


const mMass = 95;
const mHeight = 1.88;
const jMass = 85;
const jHeight = 1.76;

//const mBMI = mMass / mHeight ** 2;

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


const inputYear = '1991';
//Type conversion from String to a Number
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
//NaN error example - remember that NaN is an INVALID number
console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion 
//- automatically done by JS
//- addition finalizes to string concatenation
console.log('I am ' + 23 + ' years old');
//- subtraction finalizes as a number
console.log('23' - '10' - 3);
console.log('23' / '2');
//- can use coercion to satisfy conditional statements
console.log('23' > '18');



// 5 falsy values: 0, '', undefined, null, NaN
// You won't use these, but they prove point of faulty values
// false
console.log(Boolean(0));
//false
console.log(Boolean(undefined));
//true
console.log(Boolean('Jonas'));
//true
console.log(Boolean({}));
//false
console.log(Boolean(''));
//Example of implicit boolean coercion at work:
let money = 0;
if(money){
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log('YAY! Height is defined');
}   else{
    console.log('Height is UNDEFINED');
}

//prediction: 4
console.log('9' - '5');
//prediction: '617'
console.log('19' - '13' + '17');
//prediction: 23
console.log('19' - '13' + 17);
//prediction: false
console.log('123' < 57);
//prediction: 1143
console.log(5 + 6 + '4' + 9 - 4 - 2);
//all predictions correct!!


const age = 18;
//=== strict equals, only returns true if type and value are the same
if (age === 18) console.log("You just became an adult :D");
//== loose equality, returns true by doing type coercion


const favorite = Number(prompt("What is your favorite number?"));
console.log(favorite);

if (favorite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if(favorite === 7){
    console.log('7 is also a cool number!'); 
} else{
    console.log('Number is not 23 or 7');
}

if (favorite !== 23){
    console.log('why not 23?');
}

const numNeighbors = Number(prompt('How many neighbor countries does your country have?'));

if (numNeighbors === 1){
    console.log("Only 1 border!");
} else if (numNeighbors > 1){
    console.log("More than 1 border");
} else{
    console.log("no neighbors");
}

//skipped boolean variable lecture




function calculateAverage(x, y, z) {
    return (x + y + z) / 3;
}
const scoreDolphins = calculateAverage(97, 112, 101).toFixed(2);
const scoreKoalas = calculateAverage(109, 95, 106).toFixed(2);
if (scoreDolphins >= 100 || scoreKoalas >= 100) {
    if (scoreDolphins === scoreKoalas) {
        console.log(`It's a tie!!! Average scores: Dolphins ${scoreDolphins}, Koalas ${scoreKoalas}.`);
    } else if (scoreDolphins > scoreKoalas) {
        console.log(`Dolphins win!!! Average scores: Dolphins ${scoreDolphins}, Koalas ${scoreKoalas}.`);
    } else {
        console.log(`Koalas win!!! Average scores: Dolphins ${scoreDolphins}, Koalas ${scoreKoalas}.`);
    }
} else {
    console.log("Sorry, no winners today!");
}


const day = prompt("what day?");
//switch statement lecture
switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}
*/
const day = prompt("what day?");
//converted into if/else statements
if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}