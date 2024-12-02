class Restoran {
  pesanMakanan(...args) {
    if (args.length === 1) {
      console.log(`Makanan dengan nama '${args[0]}' tidak tersedia.`);
    } else if (args.length === 2) {
      console.log(`Pesanan telah diterima: '${args[0]}' untuk ${args[1]}.`);
    } else {
      console.log("Jumlah parameter tidak valid.");
    }
  }
}

const restoran = new Restoran();

restoran.pesanMakanan("Nasi Goreng"); 
restoran.pesanMakanan("Nasi Goreng", "Budi"); 
restoran.pesanMakanan("Nasi Goreng", "Budi", "Pedas"); 
