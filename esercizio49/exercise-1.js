class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

//const developer = new Person(1, 'Mario', 'Rossi', 25);

// Print developer as json object
const developer = JSON.stringify(new Person(1, 'Mario', 'Rossi', 25));
console.log(typeof developer);
console.log(developer);


/* alternativa lasciando developer invariato
const developer = new Person(1, 'Mario', 'Rossi', 25);

let json = JSON.stringify(developer);
console.log(json);
*/