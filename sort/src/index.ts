import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([10, 5, -2, 16]);
numbers.sort();
console.log(numbers.data);

const string = new CharactersCollection('XzTgab');
string.sort();
console.log(string.data);

const collection = new LinkedList();

collection.add(7);
collection.add(3);
collection.add(1);
collection.add(78);

collection.sort();
collection.print();
