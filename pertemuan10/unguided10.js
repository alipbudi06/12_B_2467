class Order {
    constructor(id, customerName, items) {
        this.id = id;
        this.customerName = customerName;
        this.items = items;
        this.status = 'Pending';
    }

    calculateTotal() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            total += this.items[i].quantity * this.items[i].price;
        }
        return total;
    }
}

class OrderOperation {
    perform(order) {
        throw new Error("This method must be implemented by subclasses");
    }
}

class PrintBill extends OrderOperation {
    perform(order) {
        console.log("_____________________________");
        console.log(`ID Pesanan: ${order.id}`);
        console.log(`Customer: ${order.customerName}`);
        
        order.items.forEach(item => {
            const itemTotal = item.quantity * item.price;
            console.log(`- ${item.item} - Jumlah: ${item.quantity} - Harga: ${item.price}`);
        });
        
        const subtotal = order.calculateTotal();
        const tax = subtotal * 0.10;
        const totalWithTax = subtotal + tax;

        console.log(`Total Harga setelah Ppn: Rp. ${totalWithTax}`);
        console.log("_______________________________");
    }
}

class ProcessOrder extends OrderOperation {
    perform(order) {
        if (order.status === 'Pending') {
            order.status = 'Processed';
            console.log(`Memproses Pesanan dengan ID: ${order.id}`);
        } else {
            console.log(`Order with ID: ${order.id} is already processed.`);
        }
    }
}

class TrackOrder extends OrderOperation {
    perform(order) {
        console.log(`Status ID Pesanan ${order.id} sekarang adalah ${order.status}`);
        console.log("________________________________");
    }
}

const order = new Order(12467, "alif", [ 
    { item: "Kopi Susu", quantity: 2, price: 10000 },
    { item: "Kue Lapis", quantity: 1, price: 4000 }
]);

const printBill = new PrintBill();
const processOrder = new ProcessOrder();
const trackOrder = new TrackOrder();

printBill.perform(order);
trackOrder.perform(order);
processOrder.perform(order);
trackOrder.perform(order);