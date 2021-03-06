//@ts-check
function isPrime(n) {
  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
  if (n % 2 == 0) return n == 2;
  if (n % 3 == 0) return n == 3;
  var m = Math.sqrt(n);
  for (var i = 5; i <= m; i += 6) {
    if (n % i == 0) return false;
    if (n % (i + 2) == 0) return false;
  }
  return true;
}
// console.log(isPrime(5));
// console.log(isPrime(6));

// console.log(isPrime(2));
// console.log(isPrime(0));
// console.log(isPrime(12));

// console.log(factorial(1));
// console.log(factorial(0));
// console.log(factorial(6));

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 2) + fib(n - 1);
}
// console.log(fib(20));

function isSorted(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return false;
    }
  }
  return true;
}

// console.log(isSorted([-Infinity, -5, 0, 3, 9]));
// console.log(isSorted([6, 3, 5, 4]));

// filter takes an array and function as argument
function filter(arr, filterFunc) {
  const filterArr = []; // empty array
  // loop though array
  for (let i = 0; i < arr.length; i++) {
    const result = filterFunc(arr[i], i, arr);
    // push the current element if result is true
    if (result) filterArr.push(arr[i]);
  }
  // console.log(filterArr);
  return filterArr;
}

const oddArr2 = filter([1, 2, 3, 4, 5], (num) => num % 2 === 0);

function map(arr, func) {
  //creates a new array with the results of calling a function on every element of the array

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let value = func(arr[i], i, arr);
    result.push(value);
  }
  return result;
}
let arr = [1, 2, 3, 4, 5];

// console.log(map(arr, (num) => num - 6));

function reduce(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    let value = func(arr[i], i, arr);
    arr[i] = value;
  }
  return arr;
}

// reducer takes an array, reducer() and initialValue as argument
function reduce(arr, reducer, initialValue) {
  let accumulator = initialValue === undefined ? 0 : initialValue;
  // loop though array
  for (let i = 0; i < arr.length; i++)
    accumulator = reducer(accumulator, arr[i], i, arr);
  return accumulator;
}

function reverse(str) {
  if (str === "")
    // This is the terminal case that will end the recursion
    return "";
  else return reverse(str.substr(1)) + str.charAt(0);
}

function findIndex(array, callback) {
  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];

    if (callback(value, index, array)) {
      return index;
    }
  }

  return -1;
}

function indexOf(array, str) {
  return findIndex(array, (value) => value === str);
}

function find(array, callback) {
  const index = findIndex(array, callback);

  if (index === -1) {
    return undefined;
  }

  return array[index];
}

function lastIndexOf(array, searchedValue) {
  for (let index = array.length - 1; index > -1; index -= 1) {
    const value = array[index];

    if (value === searchedValue) {
      return index;
    }
  }

  return -1;
}

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
}
palindrome("A man, a plan, a canal. Panama");

function ispalindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, "");
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

function checkPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return checkPalindrome(str.slice(1, -1));
  return false;
}

// missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number
// in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There???s a clever formula you can use.

function factorial(number) {
  if (number == 0 || number == 1) return 1;
  return factorial(number - 1) * number;
}

function sum(number) {
  //or n(n+1)/2
  if (number == 0 || number == 1) return 1;
  return sum(number - 1) + number;
}
//
function missing(arr) {
  let actualSum = 0;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
    }
    actualSum += arr[i];
  }
  let expectedSum = (max * (max + 1)) / 2;

  return expectedSum - actualSum;
}

function isBalanced(s) {
  // var re = /[^A-Za-z0-9]/g;
  let brackets = s.replace(/[^\{\}\[\]\(\)-]/g, "");

  let stack1 = [];
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "{" || s.charAt(i) === "(" || s.charAt(i) === "[") {
      stack1.push(s.charAt(i));
    }

    if (s.charAt(i) === "}" || s.charAt(i) === ")" || s.charAt(i) === "]") {
      let p = stack1.pop();
      if (s.charAt(i) === "}" && p !== "{") {
        return false;
      }
      if (s.charAt(i) === ")" && p !== "(") {
        return false;
      }
      if (s.charAt(i) === "]" && p !== "[") {
        return false;
      }
    }
  }
  if (stack1.length == 0) {
    return true;
  }
  return false;
}

// console.log(isBalanced("dghudh[}eiue}d]h678[]0990()"));
// console.log(isBalanced("}{")); // false
// console.log(isBalanced("{{}")); // false
// console.log(isBalanced("{}{}")); // true
// console.log(isBalanced("foo { bar { baz } boo }"));

//MEMOIZATION AND DYNAMIC PROGRAMMING
//original fib was O(2^N) AND SPACE COMPLEXITY IS 0(N)
//COMPUTE ONCE AND STORE THE VALUE OF THE ONE THAT IS REPEATED
//NOW IT IS O(N) AND SPACE COMPLEXITY IS O(N) for memo table + call stack

const memoFib = function () {
  let memo = {};
  return function fib(n) {
    if (n in memo) {
      return memo[n];
    } else {
      if (n <= 1) {
        memo[n] = n;
      } else {
        memo[n] = fib(n - 1) + fib(n - 2);
      }
      return memo[n];
    }
  };
};

const memoFact = () => {
  let memo = {};

  return function fact(n) {
    if (n in memo) return memo[n];
    else {
      if (n <= 1) {
        memo[n] = 1;
      } else {
        memo[n] = fact(n - 1) * n;
      }
      return memo[n];
    }
  };
};

// console.log(memoFact());
const memoize = (callback) => {
  let memo = {};
  return (...args) => {
    if (memo[args]) {
      return memo[args];
    } else {
      memo[args] = callback(args);
      return memo[args];
    }
  };
};

//suppose youre given nxn grid, how many paths from the top left to bottom right

// 3. uniq - Takes an array of numbers, and returns the unique numbers. Can you do it in O(N) time?

const uniq = (arr) => {
  let marker = [];

  for (let i = 0; i < arr.length; i++) {
    //if we have not visited yet, visit it, mark it as true
    if (marker[arr[i]] === undefined) {
      marker[arr[i]] = true;
    }
    if (marker[arr[i]] === true) {
      marker[arr[i]] = false;
    }
  }
  let count = 0;
  for (let i = 0; i < marker.length; i++) {
    if (marker[i] === true) {
      count++;
    }
  }

  return count;
};

function isuniq(arr) {
  let uniqList = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqList.includes(arr[i])) {
      uniqList.push(arr[i]);
    }
  }

  return uniqList;
}

function maxi(a) {
  // console.log(Math.max(...a));
}

maxi([2, 3, 5, 6, 3, 222, 3, 54]);

let numbers = [1, 4, 9];
let roots = numbers.map(function (num) {
  return Math.sqrt(num);
});

console.log(roots);

function stringy(s) {
  return s.split(" ");
}

console.log(
  stringy(
    "register registration root ruby rsssale sales sample samples script scripts secure send service shop sql signup signin search security settings setting setup site sites sitemap smtp soporte ssh stage staging start subscribe subdomain suporte support stat static stats status store stores system tablet tablets tech telnet test test1 test2 test3 teste tests theme themes tmp todo task tasks tools tv talk update upload url user username usuario usage vendas video videos visitor win ww www www1 www2 www3 www4 www5 www6 www7 wwww wws wwws web webmail website websites webmaster workshop xxx xpg you yourname yourusername home hypedocs.co"
  )
);

//n is values array length, capacity is goal
function knapSack(W, wt, val, n) {
  let i, w;
  let K = new Array(n + 1);

  // Build table K[][] in bottom up manner
  for (i = 0; i <= n; i++) {
    K[i] = new Array(W + 1);
    for (w = 0; w <= W; w++) {
      if (i == 0 || w == 0) K[i][w] = 0;
      else if (wt[i - 1] <= w)
        K[i][w] = Math.max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
      else K[i][w] = K[i - 1][w];
    }
  }

  return K[n][W];
}

function knapSack2(C, wt, val, n) {
  let i, j;
  let K = new Array(n + 1);

  for (i = 0; i <= n; i++) {
    K[i] = new Array(C + 1);
    for (j = 0; j <= C; j++) {
      if (j == 0 || i == 0) {
        K[i][j] = 0;
      } else if (wt[i - 1] <= j) {
        K[i][j] = Math.max(K[i - 1][j], val[i - 1] + K[i - 1][j - wt[i - 1]]);
      } else {
        K[i][j] = K[i - 1][j];
      }
    }
  }
  return K[n][C];
}

let val = [60, 100, 120];
let wt = [10, 20, 30];
let W = 50;
let n = val.length;
console.log(knapSack(W, wt, val, n));

let memoTable = function knapSackRecursive(W, wt, val, n) {
  if (n == 0 || W == 0) return 0;
  let result;
  if (memoTable[W][n] != -1) {
    return memoTable[W][n];
  }
  //if the weight of the nth item is more than capacity then it cannot be included in optimal solution

  if (wt[n] > W) {
    result = knapSackRecursive(W, wt, val, n - 1);
  } else {
    result = Math.max(
      val[n] + knapSackRecursive(W - wt[n], wt, val, n - 1),
      knapSackRecursive(W, wt, val, n - 1)
    );
  }

  return (memoTable[W][n] = result);
};

// unbounded knapsack
//recursive
function unboundedKnapsack(W, val, wt, n) {
  let dp = new Array(W + 1);

  for (let i = 0; i <= W; i++) {
    for (let j = 0; j < n; j++) {
      if (wt[j] <= i) {
        //do something
        dp[i] = Math.max(dp[i], val[j] + dp[i - wt[j]]);
      }
    }
  }
  return dp[W];
}

function coin(coins, money, index, memo) {
  let key = money + "-" + index;
  if (memo.contains(key)) {
    return memo.get(key);
  }
  let amount = 0;
  let ways = 0;
  if (money === 0) return 1;
  if (index >= coins.length) return 0;

  while (amount <= money) {
    let remaining = money - amount;
    ways += coins(coins, remaining, index + 1);
    amount += coins[index];
  }

  return coins;
}

/***
 * REGEX
 *

let regex = /testing/;
let test = regex.test("hi testing");

//matching multiple words
let regexOr = /dog|cat|bird/;
//ignore case i 
let case = /freecodecamp/i

.match() extracts the letters first one 
if you have the g flag it matches all repeats 

wildcards
. is anything 

/b[aiu]g/
matches bad big and bug

^ negate

+ 1 or more times 

* 0 or more 

match patterns only at the beginning of a string ^

$ matches the end 


\w matches and letter number or _ 
g matches any occurance


match all non letter or number
/\W/g
 /W

 numbers is \d


greedy match longest possible part of the string that matches 
lazy smallest part that matches  ?



USERNAME VALIDATOR: 
- let userCheck = /^[A-Za-z]{2,}\d* / Change this line

{2,} --> previous thing can match and after is max matches at least 2 letters 

//match all NON whitespace  \S
match all whitespace \s

{} quantified specifier 

all or none ?

Lookaheads 
let quRegex= /q(?=u)/; POSITIVE check for q and is theres a u then return q
let qRegex = /q(?!u)/; NEGATIVE check for q and look ahead if theres a u DONT return

passwords with 5 char> and 2 consecutive numberss
let pwRegex = /(?=\w{5})(?=\D*\d{2})/; // Change this line


group things you are looking for 
()
capture group 
let repeatRegex = /(\w+)\s\1/;
any letters then a space and then repeat same letters 


replace text
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');

// Returns "Camp Code"

remove white space at beginning and end
^\s+|\s+$g 
hello.replace(regex, '')
**/

//find a person by an ID --> convert a dictionary where id = key value is the person
let result;

const people = {};

result = people.reduce((acc, person) => {
  return { ...acc, [person.id]: person };
}, {});

result = people.reduce((acc, person) => {
  return { ...acc, [person.id]: person };
}, {});

result = people.reduce((acc, person) => {
  return person.age > acc ? person.age : acc;
}, null);

//max value with reduce function

result = people.reduce((acc, person) => {
  if (acc === null || person.age > acc) {
    return person.age;
  }
  return acc; //current max value
}, null);

//  implement a map with reduce

let items = [];
let id, input;
items.reduce((accum, o, i) => {
  return [...accum, o.id === id ? { ...o, name: input } : o];
}, []);

result = people.reduce((acc, person) => {
  return [...acc, person.name];
}, []);

result = people.reduce((acc, person) => {
  return [...acc, person.name];
}, []);

//write a reduce that finds a person by their name and
result = people.reduce((acc, person) => {
  if (acc !== null) return acc;
  if ("joe" === person.name) return person;
}, null);

result = people.reduce((acc, person) => {
  if (acc !== null) {
    return acc;
  } //we found the person dont need to iterate
  //still it loops through the rest
  if (person.name === "Joe") return person;
  return null;
}, null);

// check if all people are over 18

result = people.reduce((acc, person) => {
  if (!acc) return false; //found someone
  return person.age > 18;
}, true);

// any over 18
// some function
result = people.reduce((acc, person) => {
  if (acc) return true;
  return person.age > 18;
}, false);

/// count how many times a status shows update
let orders = [];
result = orders.reduce((acc, order) => {
  return { ...acc, [order.status]: (acc[order.status] || 0) + 1 };
});

function getShortMessages(messages) {
  // SOLUTION GOES HERE
  return messages.filter((f) => f.message.length < 50).map((m) => m.message);
}

function countSomething(arr) {
  return arr.reduce((acc, i) => {
    acc[i] = ++acc[i] || 1;
    return acc;
  }, {});
}
function countWords(arr) {
  return arr.reduce(function (countMap, word) {
    countMap[word] = ++countMap[word] || 1; // increment or initialize to 1
    return countMap;
  }, {}); // second argument to reduce initialises countMap to {}
}

//flatten
let folders = ["", []];

function flatten(acc, item) {
  if (Array.isArray(item)) {
    //if its an array
    return [...acc, ...item.reduce(flatten, acc)]; //use flatten function again with whatever were currently at
  } //recursively call itself to flatten children
  return [...acc, item]; //like mapping
}

result = folders.reduce(flatten, []);

// create a reduce function

function reduce(arr, callback, initial) {
  let accumulator = initial;

  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
}

function flattener(acc, item) {
  if (Array.isArray(item)) {
    return [...acc, ...item.reduce(flatten, acc)];
  }
  return [...acc, item];
}

function reduce(arr, callback, initial) {
  let acc = initial;
  //iterate over items in the array
  for (let i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr); //its result will replace acc
  }
  return acc;
}

// Explained:
// The value of `this` in Function.call is the function
// that will be executed.
//
// Bind returns a new function with the value of `this` fixed
// to whatever was passed as its first argument.
//
// Every function 'inherits' from Function.prototype,
// thus every function, including call, apply and bind
// have the methods call apply and bind.
//
// Function.prototype.call === Function.call
// module.exports = Function.call.bind(Array.prototype.slice);

function duckCount() {
  return Array.prototype.slice.call(arguments).filter(function (obj) {
    return Object.prototype.hasOwnProperty.call(obj, "quack");
  }).length;
}

// module.exports = duckCount;

// call method

function printname(firstname, lastname) {
  console.log(`${firstname} ${lastname}`);
  console.log(this); //call tlets you change this keyword
}

printname.call(
  {
    //phone will be the new THIS
    model: "samsung",
    colour: "black",
  },
  "Pegah",
  "Fallah"
);

//calling the function and able to specify the object which will be retrieved by the THIS keyword
//similar to the bind keyword and using it later on

// we can do this with binf
//bind tajes this
//call method is going to do these 2 things in one go

const printnamev2 = printname.bind(
  {
    //phone will be the new THIS
    model: "samsung",
    colour: "black",
  },
  "Pegah",
  "Fallah"
);
//call method is going to do these 2 things in one go

printnamev2();

//call method is going to do these 2 things in one go

//transaction code
// hasOwnProperty does not check the prototypal inheretance
// in checks the chain
// !! coerces a value real object sitting
// If you???d like to access the direct arguments of the arrow function, then you can use the rest parameters feature:

function doSomething(z) {
  const arrow = (...args) => {
    console.log(args); //print a b not hi
  };
  arrow("a", "b");
}

doSomething("hi");

//implicit return
const increment = (num) => num + 1;

//value of this lexical always gets outer functions this
const myObject = {
  myMethod(items) {
    console.log(this); // logs myObject
    const callback = () => {
      console.log(this); // logs myObject
    };
    items.forEach(callback);
  },
};

myObject.myMethod([1, 2, 3]);

//Now, in contrast with regular functions, the method defined using an arrow binds this lexically to the class instance.
class Hero {
  constructor(heroName) {
    this.heroName = heroName;
  }

  logName = () => {
    console.log(this.heroName);
  };
}

const batman = new Hero("Batman");
/**
 * you can define methods using the arrow function syntax inside classes. Fat arrow methods bind this value to the class instance.
 */
