//var generateName = require('sillyname');

import generateName from "sillyname";
import superheroes from "superheroes";

var sillyName = generateName();
const superhero = superheroes.random();

console.log(`My name is ${sillyName}.`);
console.log(`Hi there, my name is ${superhero}.`);