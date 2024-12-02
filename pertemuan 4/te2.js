class Produk {
  _namaProduk;
  _harga;
  _jumlahStok;

  constructor(namaProduk, harga, jumlahStok) {
    this._namaProduk = namaProduk;
    this._harga = harga;
    this._jumlahStok = jumlahStok;
  }
  #cekStok() {
    return this._jumlahStok > 0;
  }

  beli() {
    this._jumlahStok++;
    console.log(`Produk ${this._namaProduk} telah dibeli!`);
  }

  jual() {
    if (!this.#cekStok())
      return console.log(
        `Stok produk ${this._namaProduk} sedang tidak tersedia!`
      );

    this._jumlahStok--;
    console.log(`Produk ${this._namaProduk} telah dijual!`);
  }

  infoProduk() {
    console.log(
      `Produk: ${this._namaProduk}, Harga: Rp${this._harga}, Jumlah Stok: ${this._jumlahStok}`
    );
  }

  getHarga() {
    return this._harga;
  }

  getNama() {
    return this._namaProduk;
  }
}

class Sembako extends Produk {
  #jenis;

  constructor(nama, harga, jumlahStok) {
    super(nama, harga, jumlahStok);
    this.#jenis = "Sembako";
  }

  infoSembako() {
    this.infoProduk();
    console.log(`Jenis: ${this.#jenis}`);
  }
}

class Perabotan extends Produk {
  #jenis;

  constructor(nama, harga, jumlahStok) {
    super(nama, harga, jumlahStok);
    this.#jenis = "Perabotan";
  }

  infoPerabotan() {
    this.infoProduk();
    console.log(`Jenis: ${this.#jenis}`);
  }
}

const produk3 = new Sembako("Roti", 10000, 10);
const produk4 = new Perabotan("Panci", 100000, 5);

produk3.infoSembako();
produk4.infoPerabotan();
