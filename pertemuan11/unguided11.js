
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
class KartuKredit extends Payment_2467 {
  prosesPembayaran(amount) {
    console.log(
      `Pembayaran sebesar Rp.${amount} telah diproses melalui Kartu Kredit.`
    );
  }
}

class Ewallet extends Payment_2467 {
  prosesPembayaran(amount) {
    console.log(
      `Pembayaran sebesar Rp.${amount} telah diproses melalui Ewallet.`
    );
  }
}

class TransferBank extends Payment_2467 {
  prosesPembayaran(amount) {
    console.log(
      `Pembayaran sebesar Rp.${amount} telah diproses melalui Transfer Bank.`
    );
  }
}

class NotifEmail extends Notifikasi_2467 {
  kirimNotifikasi(pesan) {
    console.log(`Email terkirim: "${pesan}"`);
  }
}

class NotifSMS extends Notifikasi_2467 {
  kirimNotifikasi(pesan) {
    console.log(`SMS terkirim: "${pesan}"`);
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


const pembayaranViaKartuKredit = new KartuKredit();
const pembayaranViaEwallet = new Ewallet();
const pembayaranViaTransferBank = new TransferBank();

const notifikasiEmail = new NotifEmail();
const notifikasiSMS = new NotifSMS();

pembayaranViaKartuKredit.prosesPembayaran(50000);
notifikasiEmail.kirimNotifikasi(
  "Pembayaran Anda sebesar Rp.50000 telah diverifikasi."
);

pembayaranViaEwallet.prosesPembayaran(75000);
notifikasiSMS.kirimNotifikasi(
  "Pembayaran Anda sebesar Rp.75000 telah diverifikasi."
);
pembayaranViaTransferBank.prosesPembayaran(100000);
notifikasiEmail.kirimNotifikasi(
  "Pembayaran Anda sebesar Rp.100000 telah diverifikasi."
);