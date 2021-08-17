import { capitalizeObjectKeys, sortedKeys, getFilteredKey, getArrayOfKeysAndValues, sortedArraysByValuesLength } from './object-keys-entries.js';

test('it capitalizes the keys', () => {
  const dataObject = { name: 'Angelina Jolie', age: 80 }; 
  const output = capitalizeObjectKeys(dataObject); /
  expect(output).toEqual(['NAME', 'AGE']); 
});


// test('it sorts the keys', () => {
//   const dataObject = { name: 'Angelina Jolie', age: 80 }; 
//   const output = sortedKeys(dataObject); /
//   expect(output).toEqual(['NAME', 'AGE']); 
// });


// test('it filters the keys', () => {
//   const dataObject = { name: 'Angelina Jolie', age: 80 }; 
//   const output = getFilteredKey(dataObject); /
//   expect(output).toEqual(['NAME', 'AGE']); 
// });


// test('gives array of keys and values', () => {
//   const dataObject = { name: 'Angelina Jolie', age: 80 }; 
//   const output = getArrayOfKeysAndValues(dataObject); /
//   expect(output).toEqual(['NAME', 'AGE']); 
// });


// test('sorts array by object value length', () => {
//   const dataObject = { name: 'Angelina Jolie', age: 80 }; 
//   const output = sortedArraysByValuesLength(dataObject); /
//   expect(output).toEqual(['NAME', 'AGE']); 
// });