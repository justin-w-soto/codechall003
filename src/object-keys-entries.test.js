import { capitalizeObjectKeys, sortedKeys, getFilteredKey, getArrayOfKeysAndValues, sortedArraysByValuesLength } from './object-keys-entries.js';

test('it capitalizes the keys', () => {
    const dataObject = { name: 'Angelina Jolie', age: 80 }; 
    const output = capitalizeObjectKeys(dataObject);
    expect(output).toEqual(['NAME', 'AGE']); 
  });
  
  test('sorted keys', () => {
    const dataObject = { name: 'Spot', age: 3, isDog: true, friends: ['Rover', 'Steve', 'Fluffy'] }; 
    const output = sortedKeys(dataObject); 
    expect(output).toEqual(['age', 'name', 'isDog', 'friends']); 
  });
  
  test('get filtered key', () => {
    const dataObject = { name: 'Angelina Jolie', isSpot: false, age: 80, }; 
    const output = getFilteredKey(dataObject); 
    expect(output).toEqual(['age']); 
  });
  
  test('get array of keys and values', () => {
    const dataObject = { name: 'Angelina Jolie', age: 80 }; 
    const output = getArrayOfKeysAndValues(dataObject); 
    expect(output).toEqual([['name', 'Angelina Jolie'], ['age', 80]]); 
  });
  
  
  test('sorted arrays by values length', () => {
    const dataObject = { name: 'Bob', friend: 'Tom Hanks', location: 'Los Angeles' }; 
    const output = sortedArraysByValuesLength(dataObject); 
    expect(output).toEqual([['location', 'Los Angeles'], ['friend', 'Tom Hanks'], ['name', 'Bob']]); 
  });