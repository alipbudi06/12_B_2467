class Shape3D {
  calculateVolume() {
    throw new Error("Method 'calculateVolume()' harus diimplementasikan");
  }
}

class Sphere extends Shape3D {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateVolume() {
    return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
  }
}

class Cube extends Shape3D {
  constructor(side) {
    super();
    this.side = side;
  }

  calculateVolume() {
    return Math.pow(this.side, 3);
  }
}

class Cone extends Shape3D {
  constructor(radius, height) {
    super();
    this.radius = radius;
    this.height = height;
  }

  calculateVolume() {
    return (Math.PI * Math.pow(this.radius, 2) * this.height) / 3;
  }
}

class Tabung extends Shape3D {
  constructor(radius, height) {
    super();
    this.radius = radius;
    this.height = height;
  }

  calculateVolume() {
    return Math.PI * Math.pow(this.radius, 2) * this.height;
  }
}

// Abstraksi untuk sistem pembayaran
class Payment_NPM4Digit {
  // Method abstrak untuk proses pembayaran
  prosesPembayaran(amount) {
    throw new Error("Method 'prosesPembayaran(amount)' harus diimplementasikan");
  }
}

// Abstraksi untuk sistem notifikasi
class Notifikasi_NPM4Digit {
  // Method abstrak untuk mengirim notifikasi
  kirimNotifikasi(pesan) {
    throw new Error("Method 'kirimNotifikasi(pesan)' harus diimplementasikan");
  }
}

// Implementasi sistem pembayaran melalui transfer bank
class BankTransferPayment extends Payment_NPM4Digit {
  prosesPembayaran(amount) {
    console.log(`Pembayaran sebesar Rp.${amount} sedang diproses melalui transfer bank.`);
    // Logika untuk proses transfer bank
  }
}

// Implementasi sistem pembayaran melalui kartu kredit
class CreditCardPayment extends Payment_NPM4Digit {
  prosesPembayaran(amount) {
    console.log(`Pembayaran sebesar Rp.${amount} sedang diproses melalui kartu kredit.`);
    // Logika untuk proses kartu kredit
  }
}

// Implementasi sistem notifikasi melalui email
class EmailNotification extends Notifikasi_NPM4Digit {
  kirimNotifikasi(pesan) {
    console.log(`Mengirim notifikasi melalui email: "${pesan}"`);
    // Logika untuk mengirim email
  }
}

// Implementasi sistem notifikasi melalui SMS
class SMSNotification extends Notifikasi_NPM4Digit {
  kirimNotifikasi(pesan) {
    console.log(`Mengirim notifikasi melalui SMS: "${pesan}"`);
    // Logika untuk mengirim SMS
  }
}

// Sistem manajemen transaksi
class TransactionManager {
  constructor(paymentMethod, notificationMethod) {
    // Mematuhi Dependency Inversion Principle (DIP)
    if (!(paymentMethod instanceof Payment_NPM4Digit)) {
      throw new Error("paymentMethod harus berupa instance dari Payment_NPM4Digit");
    }
    if (!(notificationMethod instanceof Notifikasi_NPM4Digit)) {
      throw new Error("notificationMethod harus berupa instance dari Notifikasi_NPM4Digit");
    }
    this.paymentMethod = paymentMethod;
    this.notificationMethod = notificationMethod;
  }

  executeTransaction(amount, pesanNotifikasi) {
    // Memproses pembayaran
    this.paymentMethod.prosesPembayaran(amount);
    // Mengirim notifikasi
    this.notificationMethod.kirimNotifikasi(pesanNotifikasi);
  }
}

// Penggunaan Sistem
const paymentMethod = new CreditCardPayment(); // Menggunakan pembayaran dengan kartu kredit
const notificationMethod = new EmailNotification(); // Menggunakan notifikasi via email

const transactionManager = new TransactionManager(paymentMethod, notificationMethod);
transactionManager.executeTransaction(50000, "Pembayaran Anda telah berhasil diproses."); // Contoh transaksi


console.log("OCP2_B_12467"); 

const threeDimensionalShapes = [
  new Sphere(5), 
  new Cube(4), 
  new Cone(3, 7), 
  new Tabung(3, 7), 
];

threeDimensionalShapes.forEach(shape => console.log(`Volume :${shape.calculateVolume()}`));
