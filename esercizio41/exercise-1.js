class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  // throw an exception if amount is negative
  deposit(amount) {
    if (amount < 0) {
      throw new Error('Amount must be positive');
    };

    this.#amount += amount;
  }

  // throw an exception if amount is negative or if withdrawal amount is greater than current amount
  withdraw(amount) {
    if (amount < 0) {
      throw new Error('You cannot withdraw a negative amount');
    } else if (amount > this.#amount) {
      throw new Error('You cannot withdraw more than the account balance');
    };
    
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();