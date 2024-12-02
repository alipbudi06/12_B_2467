class Produk {
  #nama; 
  #jumlah; 

  constructor(nama, jumlah) {
    this.#nama = nama;
    this.#jumlah = jumlah;
  }

  informasi() {
    console.log(`Produk ${this.#nama} ada sebanyak ${this.#jumlah} pcs.`);
  }

  getterNama() {
    return this.#nama; 
  }
}

class Makanan extends Produk {
  #expired; 

  constructor(expired, nama, jumlah) {
    super(nama, jumlah);
    this.#expired = expired;
  }

  waktuRusak() {
    console.log(
      `${this.getterNama()} akan rusak pada tanggal ${this.#expired}`
    );
  }
}


class Elektronik extends Produk {
  #garansi;
  #nama;

  constructor(garansi, nama, jumlah) {
    super(nama, jumlah);
    this.#nama= nama;
    this.#garansi = garansi;
  }
  informasiGaransi() {
    console.log(`${this.#nama} memiliki garansi selama ${this.#garansi} tahun`);
  }
}

const burger = new Makanan("25 September 2024", "BigMac", 1);
const laptop = new Elektronik(5, "Laptop ASUS", 3);

burger.informasi();
burger.waktuRusak();
console.log("Makanan ini bernama " + burger.getterNama());

laptop.informasi();
laptop.informasiGaransi();
console.log("Nama produk ini adalah " + laptop.getterNama());
