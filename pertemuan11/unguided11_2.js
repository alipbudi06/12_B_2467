class Payment_2467 {
  prosesPembayaran(amount) {
    throw new Error(
      "Method 'prosesPembayaran(amount)' harus diimplementasikan"
    );
  }
}

class Notifikasi_2467 {
  kirimNotifikasi(pesan) {
    throw new Error("Method 'kirimNotifikasi(pesan)' harus diimplementasikan");
  }
}
class CreditCardPayment extends Payment_2467 {
  prosesPembayaran(amount) {
    console.log(
      `Pembayaran sebesar Rp.${amount} telah diproses melalui Kartu Kredit.`
    );
  }
}

class EmailNotification extends Notifikasi_2467 {
  kirimNotifikasi(pesan) {
    console.log(`Email terkirim: "${pesan}"`);
  }
}

class PaymentProcessor_2467 {
  constructor(paymentMethod, notificationMethod) {
    this.paymentMethod = paymentMethod;
    this.notificationMethod = notificationMethod;
  }

  process(amount) {
    this.paymentMethod.prosesPembayaran(amount);
    this.notificationMethod.kirimNotifikasi(
      `Your payment of Rp.${amount} was successful.`
    );
  }
}

const creditCardPayment = new CreditCardPayment(); 
const emailNotification = new EmailNotification(); 

const processor1 = new PaymentProcessor_2467(
  creditCardPayment,
  emailNotification
);
processor1.process(100); 
