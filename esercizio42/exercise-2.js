class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new Error('The amount provided cannot be negative');
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new Error('The amount provided cannot be negative');
    }

    if (this.#amount < amount) {
      throw new Error('You cannot withdraw more than account balance');
    }

    this.#amount -= amount;
  }

  view() {
    console.log(`Your actual bank account is ${this.#amount}`);
  }
};

const bankAccount = new BankAccount(1000);

try {
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
} catch (err) {
  console.log(err.message);
  bankAccount.view()
};

// Handle errors to avoid app crash