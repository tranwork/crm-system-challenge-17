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

  // Task 2 – Create SalesRep class
class SalesRep {
    constructor(name) {
      this.name = name;
      this.clients = [];
      console.log("Sales rep created:", this.name);
    }
  
    addClient(customer) {
      this.clients.push(customer);
      console.log(`${customer.name} has been added as a client of ${this.name}`);
    }
  
    getClientTotal(name) {
      const client = this.clients.find(c => c.name === name);
      if (client) {
        const total = client.getTotalSpent();
        console.log(`Total spent by ${name}: $${total}`);
        return total;
      } else {
        console.log(`Client named ${name} not found.`);
        return 0;
      }
    }
  }
  
  // Example usage
  const rep1 = new SalesRep("Jaden Ly");
  rep1.addClient(customer1);
  rep1.getClientTotal("Jenny Tran");
  
  // Task 3 – Create VIPCustomer class (extends Customer)
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
      super(name, email);
      this.vipLevel = vipLevel;
      console.log("VIP customer created:", this.name, `(${this.vipLevel})`);
    }
  
    getTotalSpent() {
      const baseTotal = super.getTotalSpent();
      const bonus = baseTotal * 0.10;
      const totalWithBonus = baseTotal + bonus;
      console.log(`${this.name} is a ${this.vipLevel} member. Total with loyalty bonus: $${totalWithBonus}`);
      return totalWithBonus;
    }
  }
  
  // Example usage
  const vip1 = new VIPCustomer("Bill Tran", "bill@email.com", "Gold");
  vip1.addPurchase(300);
  vip1.addPurchase(250);
  vip1.getTotalSpent();
  