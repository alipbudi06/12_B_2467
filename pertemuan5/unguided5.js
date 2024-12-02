class Karyawan {
  constructor(nama, gajipokok, jabatan) {
    if (this.constructor === Karyawan) {
      throw new Error("Class 'Karyawan' tidak dapat diinstansiasi langsung.");
    }

    this.nama = nama;
    this.gajipokok = gajipokok;
    this.jabatan = jabatan;
  }

  infoKaryawan() {
    console.log(`Nama: ${this.nama}`);
    console.log(`Jabatan: ${this.jabatan}`);
    console.log(`Pendapatan: ${this.hitungPendapatan()}`);
  }

  hitungPendapatan() {
    throw new Error(
      "Metode 'hitungPendapatan()' harus diimplementasikan di kelas turunan."
    );
  }
}

class Staff extends Karyawan {
  constructor(nama, gajipokok) {
    super(nama, gajipokok, "Staff");
  }

  hitungPendapatan() {
    return this.gajipokok * 30 + 500000;
  }
}

class Manager extends Karyawan {
  constructor(nama, gajipokok) {
    super(nama, gajipokok, "Manager");
  }

  hitungPendapatan() {
    return this.gajipokok * 30 + 1000000; 
  }
}

const manager1 = new Manager("Destin", 3000000); 
const staff1 = new Staff("Teger", 2000000); 

console.log("\n=============================");
console.log("\tInformasi Karyawan");
manager1.infoKaryawan();
console.log("===============================");

console.log("===============================");
console.log("\tInformasi Karyawan");
staff1.infoKaryawan();
console.log("===============================");
