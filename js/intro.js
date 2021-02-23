console.log("Welcome!");

// Functions
let batata = "batata";

batata = () => {
  return "welleelel";
};

const whatToSay = () => {
  return "batata";
};

function saySomething(cenoura) {
  console.log(cenoura());
}

saySomething(whatToSay);

// Java
/*
class MyLittlePoney {
  private String name;
  private int age;

  MyLittlePoney(String name, int age) {
    this.name = name
    ...
  }
}

  MyLittlePoney myLittlePoney = new MyLittlePoney(...)
*/

// Literal Objects
const myLittlePoney = {
  name: "Roberto",
  age: 3
};

myLittlePoney.powers = ["shine bright like a diamond", "take me away"];

const sayName = (objectWithName) => {
  console.log(objectWithName.name);
};

// TO JSON
//console.log(JSON.stringify(myLittlePoney));
console.log(myLittlePoney);

sayName.whatever = "A String";

// 👀
console.log(sayName.whatever);

// Arrays
const myArray = [];

myArray.push({ name: "Cantor Toyjó" });

console.log(myArray);

// functional programming
// input -> function -> output

// Type Coercion
console.log("== vs ===");
// ✅
console.log(2 === "2");
// ❌ 👇
console.log(2 == "2");
console.log("" == false);
console.log(0 == "");
console.log([] == "");
console.log([] == {});

console.log("null vs undefined");
console.log(0.1 + 0.2);

// Immediately Invoked Function Expressions
const IIFE = (() => {
  return {
    name: "IIFE 🤯"
  };
})();

console.log(IIFE);

// Functional Style
const myBeautifulArrayOfShenanigans = [
  "batata",
  { message: "Remember my little poney" },
  {
    gifts: ["Action Man", "Cinderella", "Winx", "Cluedo", "Hot Wheelssssss 🚗"]
  },
  "cenoura",
  52
];

const myTransformedArray = myBeautifulArrayOfShenanigans
  .filter((element) => element !== 52)
  .reverse()
  .map((element) => {
    // optional chaining element?.gifts?.message?.batata?.whatever
    if (!element.gifts) {
      return element;
    }

    return { gifts: element.gifts.reverse() };
  });

console.log(myBeautifulArrayOfShenanigans);
console.log("vs");
console.log(myTransformedArray);

console.log("sync vs async");
// Callback Functions
// Error First Pattern
//const fs = require('fs')
/*
fs.readFile("./batata.txt", (err, data) => {
  if (err) {
    throw err;
  }

  console.log(data);
});
*/
