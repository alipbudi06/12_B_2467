class Karyawan {
  constructor(nama, gajipokok) {
    this.nama = nama;
    this.gajipokok = gajipokok;
  }

  hitunggaji() {
    return this.gajipokok;
  }
}

class Manajer extends Karyawan {
  constructor(nama, gajipokok) {
    super(nama, gajipokok);
  }
  hitunggaji() {
    return this.gajipokok * 3;
  }
}

class sales extends Karyawan {
  constructor(nama, gajipokok) {
    super(nama, gajipokok);
  }
  hitunggaji() {
    return this.gajipokok * 2;
  }
}

const Mn1 = new Manajer("Pascal", 2000);
const Kr1 = new sales("Bukan Pascal", 2000);

Mn1.hitunggaji();
Kr1.hitunggaji();

console.log(Mn1.hitunggaji());
console.log(Kr1.hitunggaji());
