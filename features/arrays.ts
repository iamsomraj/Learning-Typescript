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

// Prevents different types to enter into array
// carMakers.push(1500); Error Line
carMakers.push('1500');

// Helps in map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});
