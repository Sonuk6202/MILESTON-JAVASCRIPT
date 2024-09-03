class Customer {
    constructor(name, balance = 0) {
        this.name = name;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return `Deposited $${amount}. New balance: $${this.balance}`;
        } else {
            return "Deposit amount must be positive.";
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                return `Withdrew $${amount}. New balance: $${this.balance}`;
            } else {
                return "Insufficient funds.";
            }
        } else {
            return "Withdrawal amount must be positive.";
        }
    }

    getBalance() {
        return this.balance;
    }
}

const customer = new Customer('Alice', 100);

function updateUI() {
    document.getElementById('customer-name').textContent = `Customer: ${customer.name}`;
    document.getElementById('balance').textContent = `Balance: $${customer.getBalance()}`;
}

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    const result = customer.deposit(amount);
    alert(result);
    updateUI();
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    const result = customer.withdraw(amount);
    alert(result);
    updateUI();
}

// Initial UI update
updateUI();
