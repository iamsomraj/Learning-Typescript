const myDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 50,
};

// Type Alias
type drink = [string, boolean, number];
const myTupleDrink: [string, boolean, number] = ['brown', true, 50];

const pepsi: drink = ['brown', true, 100];
const sprite: drink = ['transaparent', true, 100];
const tea: drink = ['brown', false, 0];
