interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
}

interface Recordable {
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name} Year: ${this.year} Is broken: ${this.broken}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: true,
  summary(): string {
    return `This think has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Recordable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
