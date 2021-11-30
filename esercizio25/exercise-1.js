const person = {
  get firstName () {
    return this.firstName;
  },
  set firstName (name) {
    this.firstName = name;
  },

  get lastName () {
    return this.lastName;
  },
  set lastName (name) {
    this.lastName = name;
  },

  fullName () {
    return `${this.firstName} ${this.lastName}`;
  }
}

const john = {
  firstName: person.firstName = 'John',
  lastName: person.lastName = 'Doe',
  fullName: person.fullName(),
}

const simon = {
  firstName: person.firstName = 'Simon',
  lastName: person.lastName = 'Collins',
  fullName: person.fullName(),
}


console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins