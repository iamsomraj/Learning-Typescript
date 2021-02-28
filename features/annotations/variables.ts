// If we are declaring and initializing on the same line
// Then we do not need type annotations

const apples: number = 15;
let speed: string = 'fast';
let hasName: boolean = true;

let empty: null = null;
let nothing: undefined = undefined;

// Object types
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];

// Classes
class Car {}
let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logMyNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use type annotations
// 1. When function returns any type

const json = '{ "x": 25, "y": 35}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2. When we declare the variable on one line and
// initialize the variable later

let myColors = ['red', 'green', 'blue'];
let foundWord: boolean;

for (const key in myColors) {
  const color = myColors[key];
  if (color === 'green') {
    foundWord = true;
  }
}

// 3. Variable whose type cannot be inferred correctly

let numbers = [-10, -1, 25];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  const no = numbers[i];
  if (no > 0) {
    numberAboveZero = no;
  }
}
