// Task 1 – Create Customer class
class Customer {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.purchaseHistory = [];
      console.log("New customer created:", this.name, `(${this.email})`);
    }
  
    addPurchase(amount) {
      this.purchaseHistory.push(amount);
      console.log(`${this.name} made a purchase of $${amount}`);
    }
  
    getTotalSpent() {
      const total = this.purchaseHistory.reduce((sum, amount) => sum + amount, 0);
      console.log(`${this.name} has spent a total of $${total}`);
      return total;
    }
  }
  
  // Example usage
  const customer1 = new Customer("Jenny Tran", "jenny@email.com");
  customer1.addPurchase(120);
  customer1.addPurchase(80);
  customer1.getTotalSpent();  