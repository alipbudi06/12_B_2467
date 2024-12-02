console.log("231712467");
console.log("Kelas : B");
console.log("");
console.log("---------");

class Kucing {
  constructor(nama, warna) {
    this.nama = nama;
    this.warna = warna;
  }

  bersuara() {
    console.log(`${this.nama} mengeluarkan suara "Meow!"`);
  }

  perkenalan() {
    console.log(
      `Halo, nama saya ${this.nama} dan saya berwarna ${this.warna}.`
    );
  }
}
const kucing1 = new Kucing("Tom", "hitam");
const kucing2 = new Kucing("Jerry", "putih");

console.log("[1]");
kucing1.perkenalan();
kucing2.perkenalan();
console.log("-----------------------------");
console.log("");

function buatMobil(roda, mesin, merek) {
  return {
    roda,
    mesin,
    merek,
    jumlahRoda() {
      return roda;
    },
    ccMesin() {
      return mesin;
    },
    detailMobil() {
      return `Mobil ini merek ${this.merek}, memiliki ${this.roda} roda, dan kapasitas mesin ${this.mesin}.`;
    },
  };
}
const mobil2 = buatMobil(4, "1500cc", "Toyota");

console.log("[2]");
console.log(mobil2.detailMobil());
console.log("-------------------------");


const prototipeMobil = {
  jumlahRoda() {
    return this.roda;
  },
  ccMesin() {
    return this.mesin;
  },
  warna() {
    return this.warna;
  },
  deskripsi() {
    console.log(
      `Mobil ini berwarna ${this.warna} memiliki ${this.roda} roda, dan kapasitas mesin ${this.mesin}.`
    );
  },
};

const mobil3 = Object.create(prototipeMobil);
mobil3.roda = 4;
mobil3.mesin = "900cc";
mobil3.warna = "merah";

console.log("");
console.log("[3]");
console.log(mobil3.jumlahRoda());
console.log(mobil3.ccMesin());
mobil3.deskripsi();
