
Section 3
==========


printName = () => {
	return 'Kyle Chart'
}

findName = () => {
	return printName()		
}

sayMyName = () => {
	return findName()
}

sayMyName()		// Calls the function as a whole

==========================

this === window;
//True - In the browser window - In nodejs 'window' is 'global' 

==========================

console.log('1-----')
console.log(teddy)
console.log(sing())
var teddy = 'bear';
function sing() {
	console.log('ohhhh bababy ')
}

// 1-----
// undefined - var teddy
// ohhhh bababy 
// undefined

// Thats what the above code outputs, because of hoisting 

============================

// Function Expression

var sing2 = function() {
	console.log('ohhhh la la la')
}

// Function Decleration

function sing() {
	console.log('ohhhh bababy ')
}

=============================

function a() {
	console.log('hi')
}

function a() {
	console.log('bye')
}

a(); 

// This will return bye, as the second function a will overwrite the 
// First function a 

===============================

var x = 'x';
printName = () => {
	console.log(x);
	var b = 'b';
	return 'Kyle Chart'
}

findName = () => {
	var a = 'a';
	return printName()		
}

sayMyName = () => {
	var c = 'c'
	return findName()
}

sayMyName()	

// All these functions has access to 'x' As it is written in the global 
// Lexical Enviroment! They are all linked by the 'scope chain' But findName 
// console.log(c) wont ever be able to find 'c' As it is not in its scope

===============================

// THIS IS A FUNCTION LEXIAL ENVIROMENT 

function sayName() {
	var a = 'a';
	return function findName() {
		var b = 'b';
		return function printName() {
			var c = 'c';
			return 'Kyle Chart'
		}
	}
}

sayName();

// When executing this function, it will only return findName, 
// As findName hasnt been invoked, To invoke all these functions
// you will need to call them all, and you do that by :-

sayName()()()

// This will call all functions, that sayName finds inside of itself
// This also means that printName will hass access to 'a' Because 
// Of how the scope chain works, But if you console.log(c) in 
// sayName it will get an error, same as in findName
// This is because you can only go one way in the scope chain
// Which is always going to the parent, not its child

===============================

function weird() {
	height = 50;
	return height
}

weird()

// This will still return 50, but it is also called memory leakeage 
// as the height was never defined and put into memory inside of 
// the weird function, so it leaks into the global scope, and it 
// is created there and put into memory

// You can get around this and stop JS doing this by using 

'use strict'

// At the top of a js document 

var heyhey = function doodle() {
	return 'heyhey'
}

heyhey() // 	Will run the function
doodle() //		Will make an error

// It makes an error because it doesnt know what doodle is, because
// it is in the memory of heyhey. Meaning the global scope doesnt 
// have access to it.

===============================

//	 THIS

const obj ={
	name: 'Kyle',
	sing: function() {
		return 'lalala' + this.name
	}
}

importantPerson = () => {
	console.log(this.name+'!');
}
const name = 'sunny';

const obj1 = {
	name: 'Kyle',
	importantPerson: importantPerson
}
const obj2 = {
	name: 'Taylor',
	importantPerson: importantPerson
}

importantPerson() // Will print out sunny, as its refering to the window currently
obj1.importantPerson() // Will print out kyle, as it refers to obj1
obj2.importantPerson() // Will print out Taylor, as it is refering to obj2

const a = function() {
	console.log('a', this)
	const b = function() {
		console.log('b', this)
		const c = {
			hi: function() {
				console.log('c', this)
			}
		}
		c.hi()	// As there if a function, it will call that function, because its the property of the object 
	}
	b()		// Returns window, as there is no function calling it, so it must be the window
}

a()		// Returns window, as the window called it

===============================

call()	// Is calling a function that was created for example

a.call()	// Will call function a - as will 
a()			// They both mean the same thing

const wizard = {
	name: 'merlin',
	health: 100,
	heal(num1, num2) {
		return this.health += num1 +num2;
		// return this.health = 100;
	}
}

const archer = {
	name: 'robin hood',
	health: 50,
}

wizard.health.call(archer)

// This allows us to borrow he heal function from the wizard to heal the archer

wizard.health.call(archer, 30, 50)

// Call can also accept argments, such as numbers. This will add both values
// to the archers health

apply()

// The only difference between call and apply, is that apply takes an array

const wizard = {
	name: 'merlin',
	health: 100,
	heal(num1, num2) {
		return this.health += num1 +num2;
		// return this.health = 100;
	}
}

const archer = {
	name: 'robin hood',
	health: 50,
} 

wizard.health.call(archer, [30, 50]) // This will still give the same results

bind()

// Bind allows us to store a function for later use  

const wizard = {
	name: 'merlin',
	health: 100,
	heal(num1, num2) {
		return this.health += num1 +num2;
		// return this.health = 100;
	}
}

const archer = {
	name: 'robin hood',
	health: 50,
} 

wizard.health.bind(archer, 30, 50) // The function wont be run, as it creates a new one
								   // Allowing us to store it for later use 

const healAcher = wizard.health.bind(archer, 30, 50)	// It is storing it for later use
healAcher()	 // Then you can call the function and it will then run it at a later date

==========================================================================

Section 4
=========

// By Reference - Arrays

let a = [1, 2, 3, 4, 5];
let b = a;

a.push(1873676154)

console.log(a)
console.log(b) 

//Both will return the modified array, but by doing this, you can create a new array
let b = [].concat(a);

// Will create a new array instead of modyfing the origional 

// By Reference - Objects 

let obj = {a: 'a', b: 'b', c: 'c'};
let obj1 = obj;	// Will just pass by reference, and modify anything if modified

let clone = Object.assign({}, obj);
let clone2 = {...obj}; // A shorter way of doing it 

// This will clone/Create a new object with the same values as the first
// And allow us to modify the object without modifying the origional

















