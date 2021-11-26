/*Alternativa con reduce

function calculateAverageAge(persons) {
  let len = persons.length;
  let agesArray = [];

  for (let x in persons) {
    agesArray.push(persons[x].age);
  }

  let result = (agesArray.reduce((sum, current)=> sum + current, 0)) / len;

  return result;
}
*/
/*
function calculateAverageAge(persons) {
  let len = persons.length;
  let sum = 0;

  for (let i = 0; i < len; sum += persons[i++].age);
  return sum / len;
}
*/

function calculateAverageAge(persons) {
  let len = persons.length;
  let sum = 0;

  for (let ages of persons) {
    sum += ages.age;
  }

  return sum / len;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const averageAge = calculateAverageAge(persons);
console.log(persons);
console.log(averageAge);