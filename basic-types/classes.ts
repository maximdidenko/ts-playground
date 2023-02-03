class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('Beep');
  }
}

class Car extends Vehicle {
  constructor(color: string, public maxSpeed: number) {
    super(color);
  }

  private drive(): void {
    console.log('CAR: drive');
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car('Black', 220);
console.log(car.color);
console.log(car.maxSpeed);
car.startDrivingProcess();
