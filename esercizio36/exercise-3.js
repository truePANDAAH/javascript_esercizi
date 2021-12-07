class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static fromObject(objLit) {
    return {
      get firstName() {
        return objLit.firstName;
      },
      set firstName(objLit) {
        this._firstName = objLit.firstName;
      },
    
      get lastName() {
        return objLit.lastName;
      },
      set lastName(objLit) {
        this._lastName = objLit.lastName;
      }
    }

  }
}

const obj = {
  firstName: 'Mario',
  lastName: 'Rossi'
};

const person = Person.fromObject(obj);
console.log(`${person.firstName} ${person.lastName}`);