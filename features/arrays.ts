const carMakers = ['ford', 'ferrari', 'tata'];
const carsArray = [
  ['ford_car1', 'ford_car2', 'ford_car3'],
  ['ferrari_car1', 'ferrari_car2', 'ferrari_car3'],
  ['tata_car1', 'tata_car2', 'tata_car3'],
];

// If we are declaring and initializing an empty array
// Then we have to mention type

let numberArray: number[] = [];
let randomNumbers: number[][] = [];
randomNumbers = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

// Helps in extracting types
const myCar = carMakers[3];
const indianCar = carMakers.pop();

// Prevents different types to enter into array
// carMakers.push(1500); Error Line
carMakers.push('toyota');

// Helps in map
const carMakerTitles = carMakers.map((car: string): string => {
  return car.toUpperCase();
});
console.log(carMakerTitles);

/**
 * Arrays with multiple types
 */

// This array will contain Dates or strings
const importantDates: (Date | string)[] = [];
importantDates.push(new Date());
importantDates.push(new Date());
importantDates.push('2021-02-21');
console.log(importantDates);
