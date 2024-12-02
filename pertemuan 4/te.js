class Produk {
  #namaProduk;
  #harga;
  #jumlahStok;

  constructor(namaProduk, harga, jumlahStok) {
    this.#namaProduk = namaProduk;
    this.#harga = harga;
    this.#jumlahStok = jumlahStok;
  }

  beli() {
    this.jumlahStok++;
    console.log(`produk ${this.#namaProduk} telah dibeli!`);
  }

  jual() {
    this.jumlahStok--;
    console.log(`produk ${this.#namaProduk} telah dijual!`);
  }

  infoProduk() {
    console.log(
      `Produk: ${this.#namaProduk}, Harga: Rp${this.#harga}, Jumlah Stok: ${
        this.#jumlahStok
      }`
    );
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
    console.log(`Transaksi; oleh pelanggan ${Pelanggan.getNama()}`)
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
    this.#modal -= Produk.harga;
    Produk.beli();
    console.log(`Stok Produk telah ditambahkan!`) ;
  }
}


const produk1 = new Produk("Pensil", 1000, 10);
const kasir1 = new Kasir("Moch Alif Budi Setyawan", 231712467);
const pelanggan1 = new Pelanggan("Mega");
const toko1 = new Toko("Toko Sukses");
// const kasir2 = new Kasir("Seka Mewing", 2);

produk1.infoProduk();
kasir1.infoKasir();
kasir1.jualProduk(produk1, pelanggan1);
toko1.beliProduk(produk1);



// kasir2.infoKasir();
// kasir2.id = 
// kasir2.infoKasir();



