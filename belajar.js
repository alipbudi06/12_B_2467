class Produk {
    namaProduk;
    harga;
    jumlaStok;

    constructor(namaProduk, harga, jumlaStok) {
        this.namaProduk = namaProduk;
        this.harga = harga;
        this.jumlahStok = jumlaStok;
    }

beli() {
    this.jumlahStok++;
    console.log(`produk ${this.namaProduk} telah dibeli`);
}

jual() {
    this.jumlahStok--;
    console.log(`produk ${this.namaProduk} telah dijual!`);
    }

infoProduk() {
    console.log(`Produk: ${this.namaProduk}\nHarga: ${this.harga}\nJumlah Stok: ${this.jumlahStok}`);
    }
}

class Kasir {
    nama;
    id;

    constructor(nama, id) {
        this.nama = nama;
        this.id = id;
    }

    infoKasir() {
        console.log(`Kasir ${this.nama}, ID: ${this.id}`);
    }
}

class Pelanggan {
    nama;

    constructor(nama) {
        this.nama = nama;
    }

    getNama() {
        return this.nama;
    }
}

// class Toko {
//     namaToko;
//     modal = 500000;

//     constructor(namaToko) {
//         this.namaToko = namaToko;
//     }

//     infoToko() {
//         console.log(`Too: ${this.namaToko}, Modal: Rp${this.modal}`);
//     }
// }

let produk1 = new Produk("Pensil", 1000, 10);
let kasir1 = new Kasir("Moch Alif Budi Setyawan", 231712467);
let pelanggan1 = new Pelanggan("Mega");
// let toko1 = new Toko("Toko Dia");

// toko1.infoToko();
kasir1.infoKasir();
produk1.beli();
produk1.jual();
produk1.infoProduk();