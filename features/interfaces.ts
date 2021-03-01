interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: 'Honda Civic',
  year: 2000,
  broken: true,
};

const printVehicle = ({ name, year, broken }: Vehicle) => {
  console.log(
    `
    Name: ${name}
    Year: ${year}
    Is it broken? ${broken}
    `
  );
};

printVehicle(oldCivic);
