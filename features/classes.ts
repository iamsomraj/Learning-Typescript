class Vehicle {
  constructor(public color: string) {}

  // Above constructor is a shortcut way

  protected honk(): void {
    console.log("Beep  Beep");
  }
}

const vehicle = new Vehicle("yellow");
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("Car is moving...");
  }

  startDriving(): void {
    this.drive();
    this.honk();
    console.log(this.color);
    console.log(this.wheels);
  }
}

const car = new Car(5, "red");
car.startDriving();
