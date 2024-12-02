231712467// ALIF_
class OrderManager {
  constructor() {
    this.observers = []; 
    this.orders = []; 
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers(order) {
    this.observers.forEach((observer) => observer.notify(order));
  }
  createOrder(order) {
    this.orders.push(order);
    this.notifyObservers(order);
  }

  getOrders() {
    return this.orders;
  }
}

class OrderFactory {
  createOrder(type, orderId, details) {
    if (type === "DineIn") {
      return {
        type: "DineIn",
        orderId,
        table: details.table,
        items: details.items,
      };
    } else if (type === "TakeAway") {
      return {
        type: "TakeAway",
        orderId,
        customerName: details.customerName,
        items: details.items,
      };
    } else {
      throw new Error(`Jenis pesanan "${type}" tidak dikenal.`);
    }
  }
}

class Chef {
  constructor(name) {
    this.name = name;
  }

  notify(order) {
    console.log(
      `${this.name} menerima pesanan baru: ${order.type} - ${order.orderId}`
    );
    if (order.type === "DineIn") {
      console.log(
        `Pesanan DineIn: Meja ${order.table}, Menu: ${order.items.join(", ")}`
      );
    } else if (order.type === "TakeAway") {
      console.log(
        `Pesanan TakeAway: Pelanggan ${
          order.customerName
        }, Menu: ${order.items.join(", ")}`
      );
    }
  }
}

class Cashier {
  constructor(name) {
    this.name = name;
  }

  notify(order) {
    console.log(
      `${this.name} mencatat pesanan: ${order.type} - ${order.orderId}`
    );
    if (order.type === "DineIn") {
      console.log(
        `Pesanan DineIn: Meja ${order.table}, Menu: ${order.items.join(", ")}`
      );
    } else if (order.type === "TakeAway") {
      console.log(
        `Pesanan TakeAway: Pelanggan ${
          order.customerName
        }, Menu: ${order.items.join(", ")}`
      );
    }
  }
}

const factory = new OrderFactory();
const manager = new OrderManager();

const chef = new Chef("Chef Alif");
const cashier = new Cashier("Cashier Lisa");

manager.addObserver(chef);
manager.addObserver(cashier);

const order1 = factory.createOrder("DineIn", "001", {
  table: 5,
  items: ["Pasta", "Salad"],
});

const order2 = factory.createOrder("TakeAway", "002", {
  customerName: "John",
  items: ["Burger"],
});
manager.createOrder(order1);
manager.createOrder(order2);
const orders = manager.getOrders();
console.log(orders);
