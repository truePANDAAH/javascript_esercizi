const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  students.push(student);
}

addStudent('Marco');
console.log(students);


/*dichiarando la variabile come una costante non possiamo ridichiararla o riassegnarla ma, nel caso di array o oggetti, possiamo cambiare il loro contenuto poiché non veniamo meno alle prime due affermazioni*/