// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const { firstname, lastName, age, eyeColor } = person;


// Object properties
const a = 'test';
const b = true;
const c = 789;

const okObj = (a, b, c);


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

let message = `Hello ${firstname} Have I met you before? I think we me in ${city} Last summer no???`


// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

const isvalidAge = (age = 10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"

let sym1 = symbol("This is my first symbol"); 


// Arrow functions
const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
