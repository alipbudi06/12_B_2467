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

class Kasir {
    #nama;
    #id;
    
    constructor(nama, id) {
        this.#nama = nama;
        this.#id = id;
    }
    
    infoKasir() {
        console.log(`Kasir ${this.#nama}, ID: ${this.#id}`);
    }
    
    jualProduk(Produk, Pelanggan) {
        console.log(
            `Transaksi: ${Produk.getNama()} oleh Pelanggan ${Pelanggan.getNama()}`
        );
        Produk.jual();
    }
}

class Pelanggan {
    #nama;
    
    constructor(nama) {
        this.#nama = nama;
    }
    
    getNama() {
        return this.#nama;
    }
}

class Toko {
    #namaToko;
    #modal = 500000;
    
    constructor(namaToko) {
        this.#namaToko = namaToko;
    }
    
    infoToko() {
        console.log(`Toko: ${this.#namaToko}, Modal: Rp${this.#modal}`);
    }
    
    beliProduk(Produk) {
        this.#modal -= Produk.getHarga();
        Produk.beli();
        console.log(`Stok Produk telah ditambahkan!`);
    }
}

const produk1 = new Produk("Buku", 10000, 10);
const produk2 = new Produk("Pulpen", 5000, 0);
const pelanggan1 = new Pelanggan("Joko");
const kasir1 = new Kasir("Seka Mewing", 1);
const sembako1 = new Sembako("Beras", 12000, 50);
sembako1.infoSembako();

kasir1.jualProduk(produk1, pelanggan1);
kasir1.jualProduk(produk2, pelanggan1);
