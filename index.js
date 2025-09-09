class BankAccount {
  constructor(name) {
    this.name = name;
    this.balance = 0;
    this.history = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.history.push(`+ $${amount} (Balance: $${this.balance})`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("not enough money!");
    } else {
      this.balance -= amount;
      this.history.push(`- $${amount} (Balance: $${this.balance})`);
    }
  }

  showBalance() {
    console.log(` Balance: $${this.balance}`);
  }

  showHistory() {
    console.log("\n History:");
    if (this.history.length === 0) {
      console.log("No transactions yet.");
    } else {
      this.history.forEach((h, i) => console.log(`${i + 1}. ${h}`));
    }
  }
}
const account = new BankAccount("User");
console.log(" Welcome to Easy Bank!");
account.deposit(100);
account.withdraw(40);
account.showBalance();
account.deposit(50);
account.withdraw(200);
account.showHistory();
