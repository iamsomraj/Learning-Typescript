const profile = {
  name: 'Somraj',
  age: 25,
  isMarried: false,
  coords: {
    lat: 150,
    long: 75,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
console.log(`
  Profile {
    age: ${age}
  }
`);

const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;
console.log(`
  coords: {
    lat: ${lat}
    long: ${long}
  }
`);
