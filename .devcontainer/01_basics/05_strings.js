const name = "imran"
const repoCount = 50

console.log(name +  repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String (`imran-qa-automation-tester`) 
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 4)
console.log(newString);

const newString2 = gameName.slice(-8, 4)
console.log(newString2);

const newString3 = "   Imran   "
console.log(newString3);
console.log(newString3.trim());

const url = "imranqa.com/testing%%20ambekari"
console.log(url.replace('%%20', '-'))
console.log(url.includes ('testing1'));

console.log(gameName.split('-'));





