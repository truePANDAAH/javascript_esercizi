const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"
person2.firstName = 'Giovanni';

console.log(person1);
console.log(person2);


/*Dichiarare che const person2 = person1 non signifia copiare l'uno dentro l'altro. In questo modo, infatti, dichiariamo che sono lo stesso oggetto. Di conseguenza, ogni cambiamento in person2 "cambierà" anche person1.*/