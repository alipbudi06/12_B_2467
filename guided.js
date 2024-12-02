class Produk {
    constructor(nama, jumlah) {
        this.nama = nama;
        this.jumlah = jumlah;
    }
    informasi() {
        console.log(`Produk ${this.nama} ada sebanyak ${this.jumlah} pcs.`);
    }
    getterNama(){
        return this.nama;
    }
}

class Makanan extends Produk {
    constructor(expired, nama, jumlah) {
        super(nama, jumlah);
        this.expired = expired;
    }
    waktuRusak() {
        console.log(`${this.nama} akan rusak pada tanggal ${this.expired}`);
    }
}

class Elektronik extends Produk {
    constructor(garansi, nama, jumlah) {
        super(nama,jumlah);
        this.garansi = garansi;
    }
    informasiGaransi() {
        console.log(`${this.nama} Memiliki garansi selama ${this.garansi} tahun`);
    }
}

const burger = new Makanan("25 September 2024", "BigMac", 1);
const laptop = new Elektronik(5, "Laptop ASUS", 3);
burger.informasi();
burger.waktuRusak();
console.log("Makanan ini bernama " + burger.getterNama());
laptop.informasi();
laptop.informasiGaransi();
console.log("Nama Produk ini adalah " + laptop.getterNama());