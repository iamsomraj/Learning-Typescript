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

// Start with 254