const carMakers: string[] = ['BMW', 'Porsche', 'Mercedes'];

const carByMake = [['X5'], ['Cayene'], ['GLE']];

// Help with inferrence when extracting values
const myCar = carMakers[0];
const bestCar = carMakers.pop();

// Prevent incompatible values
carMakers.push('Mazda');

// Help with native functions
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types
const importantDates: (string | Date)[] = [];
importantDates.push('20/04/2023');
importantDates.push(new Date());
