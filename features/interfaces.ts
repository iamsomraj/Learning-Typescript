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
  name: 'Honda Civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `
    Name: ${this.name}
    Year: ${this.year}
    Is it broken? ${this.broken}
    `;
  },
};

const printSummary = (item: Reportable) => {
  console.log(item.summary());
};

printSummary(oldCivic);
