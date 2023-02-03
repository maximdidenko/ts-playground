class Collection<T> {
  constructor(public items: T[]) {}

  get(index: number): T {
    return this.items[index];
  }
}

const collection = new Collection<number>([1, 2, 3, 4, 5]);

function print<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

print<string>(['a', 'b', 'c']);

// Constraints
class Airplane {
  print(): void {
    console.log('I am airplane');
  }
}

class House {
  print(): void {
    console.log('I am house');
  }
}

interface Printable {
  print(): void;
}

function printAirplaneOrHouse<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}
