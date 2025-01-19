// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 46364364364364836

// Reference (Non Primitive)
// Array, Objects, Functions

const heroes = ["srk", "sak", "krishh"];
let myObj = {
    name: " imran ",
    age: 25
}

const myFunction = function() {
   console.log("Hello world");
    
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (Non-Primitive)

let myYoutubechannel = "imrandotcom"

let anotherName = myYoutubechannel
console.log(anotherName);
