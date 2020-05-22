Javascript - Pracitce code along side 
==========

Single threded language - Meaning one set of instructions are called at a time, not doing multiple things 

Interpreted language - Yes/No Depends how the the code is being used/written, When it was first released yes! But now not so much
Dependes on the implementation

camelCase 					- Meaning the first word is lower case and the second is capital

The index are the numberss in an array, For example if its the first position, it will be [0] As JS starts from 0

The reason we write optimised code, is so that we are helping the engine run the code and optimise it even furhter, so we can build faster and more efficent programs

Basic Code Example
==================

hello = () => {	}			- Standard Function
const hello = []			- Standard array
const hello = {}			- Standard object
const hello = ''			- Standard string 
const/let/var hello 		- Standard variable syntax
console.log   				- Logging to console 
async await 				- Says do this, then wait before completion to carry on
boolean 					- true or false 
null 						- Means it doesnt exist
prompt()					- Tells the window to bring a prompt up for an input 
alert()						- Will bring up an alert, such as a warning

===							- Equels the same as
>=/<=						- Greater than or equel to/less than
</>							- Greater than/Less than
!==							- Doesnt equel the same value 

if else/elsse if  			- Saying if this happens, do this, if not, do this 
if 							- Compares two or more inputs
else 						- Says if the 'if' statment is false, do this

&&							- This means 'and'
||							- This means 'or'
!							- Means the opposite

return						- Returns an output based on the code before it

for 						- Loops through code a set number of times
while 						- Loops through the code until the output is true

debugger; 					- Pauses the code, where it is placed

const 						- Will always mean the same thing and never hoisted - Block scope 
let 						- Can be overridden but never hoisted - Block scope
var 						- Can be hoisted, and overridden at any time - Function scope

Array.from 					- Will create an array from what its given

==							- Type coercion - Tries to make the 2 types the same

===================================================================

Section 2
=========

Engine
======

The javascript engine, allows the computer to read the javascript file and convert it into a language it can understand, 1s and 0s

ECMAscript is essentially the governing body, and says this is how you should build your engine, so that all code will work the same in no matter what engine

Interperator 
============

- Reads the code line by line
- Quicker to run the code as it runs the code straight away
- With loops, it can be a downside, as until it is finished with the loop, it is stuck on that line of code, which slows the whole program down


Compiler 
========

-  Works ahead of time to try to understand what we want it to do, and then compile the language down to a code that can be read by the computer, essentially creating a new code
- Although takes a little longer to start the program, with loops for example, it will already know the output it needs! So instead of calling that function a specific amount of times, it will just replace it with the output


JIT Compiler - Just In Time Compiler 
============

- Is a mix of both, allowing the computer to read the code, and work out the best way to output it 
- As the code is being run by the interperator, the compiler is monitoring the code and finiding ways it can optimise it, for quicker programs 
- Allowing the code to be run straight away, as well as optamising the code for the best performance 


Problematic Code/Try not to use
===============================

eval()
arguments
for in
with 
delete 

Hidden classes - Basically meaning to have your code in order, Not mixing the code into different orders. As this will slow the program down - This also helps optimise the code for the compiler  

Inline caching - Essentially remembers the code and changes the code to the output

Call Stack
==========

Keeps track of where we are in the code, so it runs in the correct order 
Runs as a first in last out basis, essentially, when a function is called, it will put it to the top of the stack, then when its finished, it will be removed 
What ever is ontop of the call stack, is where the function is currently running 

Memory Heap
===========

Stores and writes the information for the code
Allows us to store information for later use
Allows us to release information if we dont need it anymore(delete) 

Stack Overflow 
===============

Is when the call stack gets overflowed until it cant be executed anymore. This is from nested functions inside functions that have arrays inside of objects.

Recursion - Is where a function calls itself, over and over again! Never allowing the function to finish

inception = () => {
	inception
}

This function will keep calling itself, and overflow the call stack, throwing errors

Garbage Collection
==================

Is a garbage collected language - Meaning, that once we have called a function, and we dont need its information anymore, it will automatically clean it out! Freeing the memory for another use somewhere else 

Trying to Preventing memory leaks

let array =[],
for (let i = 5; i > i; i++) {
	array.push(i-1)
}
 
This is an infinte loop, and will never stop eventually causing a memory leak, as it will fill up everything! This will cause the program/brower to crash! 

Memory leaks can be caused by -

Too many global variables, As these wont be deleted by garbage collection

Too many event listners, as they are never removed in the memory 

setInterval - Will constantly run whats inside it, and the data will never be deleted, as the program is constantly using it, filling up more and more memory

Synchronus 
===========

Means it runs in order that it is defind to, Meaning that until the callstack is empty, you cant do anything else 

Asynchronus 
===========

Allows the code to run, whilst other things are happening
Web API - Allows us to ask the browser to do something in the background, whilst the javascript program is running 

Javascript runtime 
==================

Is allowing multiple programs to run whilst the javascript program is running, as it essentially says, hey give me anything I can do in the mean time, whilst you are doing that 

===================================================================

Section 3
==========

Global/Execution context - When js sees the '()' it says, Okay ill run this function but i need to create an execution context and add it to the stack


Global execution context - Creates the global object, which is the js file as a whole, and the 'this' element, They both equel to each other meaning they are essentially the same thing.

Each Execution context, has its own variable enviroment 


Lexical Enviroment 
==================

Where we write something, Meaning that when the code is read by the engine, it will know different things about the code, from where it has been written! Similar to scope. But not identical. For example, A function inside a function, The engine knows that that function only has access to whats inside of that lexical enviroment.
Basically every function is its own lexical enviroment, and when the function is called, that is the lexical enviroment that is running at that time, The call stack is essentially telling us what lexical enviroment is running at the given time.

Hoisting
========

Its the java script engine allocating memory for your functions and variables before it executes it. 

Basically it works out what things need to be stored in memory for later use, even if it doesnt know what it is yet! 
But with functions, it will call them up to the top and run them, if they have been called before 

Making variable partially hoisted, as it hoists the name of the variable, but not what it defines in memory 

But functions are fully hoisted 

const/let are never hoisted! Only var and functions 

Functions
=========

Function decleration - is a function that is inside of a variable

Function expression - is just where the function is declared, on its own 

When calling a function it has three steps:-
Invocation 		- Stating a function is to be called
	Gives you arguments - Try to never use it, unless nesecery 
call 			- Stating what function to call
Execution   	- Executing the function 

 Scope
 =====

 Basially saying what code can I access 

 Global:-

 Is everything written in the main body of the code, That are not inside of functions

 Lexical:-

 Determins what data is avaliable to the function, as it depends where the data is defined! If it is with in itself, it can use it, but if it is not, it cant  

Function Scope/Block Scope 
==========================

Function scope, only will create a new scope/enviroment when a function is created meaning 

if (5 > 4) {
	var secret ='1234'
}

secret;

will return '1234' As there is no new sscope being created and it is in the global scope. If it was inside a function, you are not able to access the secret 


Block scope is the {}, meaning anytime the engine sees the brackets it creates a new scope/enviroment, meaning that youd never be able to access the secret from the global scope 

let/const - Allow us to use block scope inside of JS, As when they are defined, it will create a new scope 


This
====

Is the object that the function is a property of

When the Global Exectuion Context is created, it is refering to the window
But we dont always want it to refer to that 

But when a new function/object is created, it allows us to use things inside of the object, Like this example below

It gives methods access to their objects 

const obj ={
	name: 'Kyle',
	sing() {
		return 'lalala' + this.name
	},
	singAgain() {				// This also allows us to do things like 
	return this.sing + '!'		// this, So we dont have to repeat code just
}								// To add something extra 
}

Using the 'this' keyword, allows us to always use the up to date information, As if the name changes, and we didnt use 'this.name' We would have to go in and change the name manually everytime! This is because, it is the object that the function is a property of.
 
Can execute the same code for multiple objects 

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

What this means, it 'this' refers to what ever is left of the '.' If there is nothing, it refers to the window! If there is an object name, it will refer to that! Allowing us to use one line of code, to call many different objects

call() apply() bind()
=====================

call()
======	

Is calling a function that was created for example

a.call()	// Will call function a - as will 
a()			// They both mean the same thing

Call also allows you to borrow funcitons from other functions, Example below

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
=======

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

This is saying, borrow the heal function from the wizard and apply it to the archer

bind()
======

Bind essentially creates a new function that will be called for later use


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

The function wont be run, as it creates a new one. Allowing us to store it for later use 

const healAcher = wizard.health.bind(archer, 30, 50); 
It is storing it for later use

Then to call the function, just call the new one it has created 

healArcher();


============================================================================

Section 4
=========

Javascript types
=================

typeof - To find out the type, of what ever you are using
typeof 5 - Will output number

Primative 
=========

Only represents a single value 

Numbers 
	1,2,3,4,5

boolean 
	true/false

strings 
	'Hello there my love'. 'I love Taylor' - Text

undefined 
	Means it exists, but it hasnt been defined yet 

null	
	Doesnt mean anything/No value there

symbol('Just me')
	Usefull for identifying objects properties 

Non-Primative
=============

Represents multiple values 

objects - {} - Stores 
	Array - []
		Check for an array by doing Array.isArray([])
	function(){}


By Reference/By Value
=====================

Pass by value
=============

essentially means it doesnt know of any others existence
It simply copies the value of another if it is referenced ie:

var a = 5;
var b = a;

b++;

console.log(a) - 5
console.log(b) - 6

Simply copying the value, and placing it into a new memory heap in the systems memory 

Pass by reference
================= 

let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1;

obj2.password = 'easypeasy';

console.log(obj1)
console.log(obj2) 

Will both return the same thing with the updated password, This is beacuse of pass by reference, As they are stored in memory as objects, meaning we dont copy the values to create a new memory. We just refernce it, and if something is being updated. everything that references that object, will be updated with the new information. This also allows us to save space in memory.

let a = [1, 2, 3, 4, 5];
let b = a;

a.push(1873676154)

console.log(a)
console.log(b) 

//Both will return the modified array, but by doing this, you can create a new array
let b = [].concat(a);

// Will create a new array instead of modyfing the origional 

Doing this with objects is a little different 

let obj = {a: 'a', b: 'b', c: 'c'};
let obj1 = obj;	// Will just pass by reference, and modify anything if modified

let clone = Object.assign({}, obj);
let clone2 = {...obj};

// This will clone/Create a new object with the same values as the first
// And allow us to modify the object without modifying the origional

Type Coercion
=============

By using '==' the JS engine will try to convert two different types into the same so it can evaluate them and see if they are the same. For example

5 == '5'

Will return true, as the engine will convert one of them into the other, and will compare them to each other 

But by using '===' Is saying, Dont coerse these values, and compare them literally how they are stated 














