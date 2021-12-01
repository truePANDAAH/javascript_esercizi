const person = {
  get firstName() {
    return this._firstName;
  },
  set firstName(name) {
    this._firstName = name;
  },

  get lastName() {
    return this._lastName;
  },
  set lastName(name) {
    this._lastName = name;
  },

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//alternativa che avevo fatto e non funzionava
/*
const john = {
  firstName: person.firstName = 'John',
  lastName: person.lastName = 'Doe',
  fullName() { return person.fullName() },
}

const simon = {
  firstName: person.firstName = 'Simon',
  lastName: person.lastName = 'Collins',
  fullName() { return person.fullName() },
}
*/

// alternativa dopo suggerimento di usare create
const john = Object.create(person);
john.firstName = 'John';
john.lastName = 'Doe';

const simon = Object.create(person);
simon.firstName = 'Simon';
simon.lastName = 'Collins';

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins

// console.log(person.fullName());