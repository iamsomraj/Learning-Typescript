// interface Vehicle {
//   name: string;
//   year: Date;
//   broken: boolean;
//   summary(): string;
// }

// const oldCivic = {
//   name: 'Honda Civic',
//   year: new Date(),
//   broken: true,
//   summary(): string {
//     return `
//     Name: ${this.name}
//     Year: ${this.year}
//     Is it broken? ${this.broken}
//     `;
//   },
// };

// const printVehicle = (vehicle: Vehicle) => {
//   console.log(vehicle.summary());
// };

// printVehicle(oldCivic);

/**
 *  Now we are making some changes to the interface.
 *  We are making it more generic.
 */

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "Honda Civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `
    Name: ${this.name} Year: ${this.year} Is it Broken? ${this.broken}
    `;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 50,
  summary(): string {
    return `
    My ${this.color} colored drink has ${this.sugar} grams of sugar
    `;
  },
};

const printSummary = (item: Reportable) => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
