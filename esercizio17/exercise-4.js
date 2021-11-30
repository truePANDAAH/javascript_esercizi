let objCalc;

function calculate() {
  objCalc = {
    add() { x + y },
    sub() { x - y },
    multiply() { x * y },
    divide() { x / y },
    printResult() { return x }
  }

};

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7