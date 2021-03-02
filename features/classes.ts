class Vehicle {
  drive(): void {
    console.log("Vehicle is moving...");
  }

  honk(): void {
    console.log("Beep  Beep");
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log("Car is moving...");
  }
}

const car = new Car();
car.drive();
car.honk();
