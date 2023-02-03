@classDecorator
class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Ooops the boat was sunk in ocean')
  pilot(@parameterDecorator speed: number): void {
    if (speed < 100) {
      throw new Error('Error');
    } else {
      console.log('swish');
    }
  }
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key);
  console.log(index);
}

function classDecorator(constructor: Function) {
  console.log(constructor);
}

new Boat().pilot(101);
