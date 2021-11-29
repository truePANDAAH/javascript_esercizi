function getKeys(obj) {
  //return Object.keys(obj);

  const name = [];
  
  for (let i in obj) {
    name.push(i);
  }

  return name;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);