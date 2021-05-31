const people = [
  { id: "1", name: "pegah", age: 35 },
  { id: "2", name: "pegah1", age: 135 },
  { id: "3", name: "pegah2", age: 25 },
  { id: "4", name: "pegah3", age: 55 },
];

let result;

//count people in the array

// console.log(people.length);

result = people.reduce((acc, person) => {
  return ++acc;
}, 0);

//sum of ages

result = people.reduce((acc, person) => {
  return acc + person.age;
}, 0);

//array of names (map)

result = people.reduce((acc, person) => {
  return [...acc, person.name];
}, []);

//dictionary

result = people.reduce((acc, person) => {
  return { ...acc, [person.id]: person.name };
}, {});

//max ages

result = people.reduce((acc, person) => {
  return person.age > acc ? person.age : acc;
}, 0);

//find by names

result = people.reduce((acc, person) => {
  if (acc !== null) return acc; //we found
  if (person.name === "pegah") return person;
  return null;
}, null);

//all person over 18
result = people.reduce((acc, person) => {
  if (!acc) return false;
  return person.age > 18;
}, true);

//some person is over

result = people.reduce((acc, person) => {
  if (acc) return true;
  return person.age > 18;
}, false);

// console.log(result);

//status and number of times it occurs

const orders = [
  { id: "1", status: "pending" },
  { id: "2", status: "pending" },
  { id: "3", status: "pending" },
  { id: "4", status: "idk" },
  { id: "5", status: "idk" },
  { id: "5", status: "idk" },
  { id: "5", status: "idk" },
];

let res;

res = orders.reduce((acc, order) => {
  acc[order.status] = ++acc[order.status] || 1;
  return acc;
}, []);

res = orders.reduce((acc, order) => {
  return { ...acc, [order.status]: (acc[order.status] || 0) + 1 };
});

//flatten an array

const folders = ["hi", ["hihi", "hihihihi"], ["hiw", [["hi"]]]];
function flatten(acc, item) {
  if (Array.isArray(item)) {
    //if its an array
    return [...acc, ...item.reduce(flatten, [])]; //use flatten function again with whatever were currently at
  } //recursively call itself to flatten children
  else return [...acc, item]; //like mapping
}

result = folders.reduce(flatten, []);

console.log(result);
/**
 * how to create a snippit in react for SEO
 *
 */

//spread operaror

const arr2 = "hello";

// console.log(arr3);

//rest operator

function rest(...args) {
  let sum = 0;
  for (let i of args) {
    sum += i;
  }
  return sum;
}

//string literals
// let str = `${str1} ${str2}`;
// console.log(str);
/**
 * A generator provides us a new way to work with iterators and functions.
 * The generator is a special kind of function that may be paused in the middle either one or many times and can be resumed later.
 * The declaration function* (function keyword followed by an asterisk) is used to define a generator function.
 * When the generator gets called, it doesn't run its code. Instead, it returns a special object which is called as 'Generator Object' for managing the execution.
The generator function can return (or yield) the control back to the caller at any point.
Unlike the regular function, the generator can return (or yield) the multiple values, one after another, on the requirement.

 */

function* gen() {
  yield 100; // suspends the function execution and sends a value back to the caller
  yield;
  yield 200;
}
var mygen = gen();
console.log(mygen.next().value); //When you call the next() method along with an argument, it will resume the execution of the generator function,
//replacing the yielded expression where the execution was paused with the argument from the next() method.
console.log(mygen.next().value);
console.log(mygen.next().value);

/**
 * It is a JavaScript function that runs as soon as it defined.
 * An IIFE (Immediately Invoked Function Expression) can be used for avoiding the variable hoisting from within the blocks.
 * It allows the public access to methods while retaining the privacy for variables defined in the function.
 */

(function () {
  console.log("Hello World");
})();

// Syntax of IIFE with ES6 arrow functions (though parentheses only allowed on outside)

(() => {
  /* ... */
})();

function hello() {
  console.log("Regular function");
}
// Regular Function execution.
hello();

// IIFE creation and execution.
(function () {
  console.log("Immediately Invoked Function Expression");
})();
(function (x, y, z) {
  console.log(x);
  console.log(y);
  console.log(z);
})(100, 200, 300);

//By using the default parameters, we can initialize named parameters with default values if there is no value or undefined is passed.

var show = (a, b = 200) => {
  console.log(a + " " + b);
};
show(100);

(function def(a, b = 11) {
  console.log(`${a} and ${b} `);
})(10, 22);

//15) Discuss the for...in loop.
function Mobile(model_no) {
  this.Model = model_no;
  this.Color = "White";
  this.RAM = "4GB";
}
//It is similar to for loop that iterates through the properties of an object.
//It is useful when we require to visit the properties or keys of the object.

var Samsung = new Mobile("Galaxy");
for (var props in Samsung) {
  console.log(props + " : " + Samsung[props]);
}
//This loop is used for iterating the iterables (arrays, string, etc.).

//if they face eachother they turn 180 degrees

const arr = ">>>>><<<<<<";
const turn_count = (army) => {
  const arrayArmy = army.split("");

  return arrayArmy.reduce((acc, curr, i, a) => {
    if (curr === "<" && a[i + 1] === ">") {
      acc++;
    }
    return acc;
  }, 0);
};

console.log(turn_count(arr));
