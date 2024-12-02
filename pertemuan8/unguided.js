class Kendaraan {
  constructor(merk, model) {
    this.merk = merk;
    this.model = model;
  }

  getDeskripsi() {
    return "Deskripsi kendaraan belum tersedia.";
  }
}

class Mobil extends Kendaraan {
  constructor(merk, model, jumlahPintu) {
    super(merk, model);
    this.jumlahPintu = jumlahPintu;
  }

  getDeskripsi() {
    return `Mobil ${this.merk} ${this.model} dengan ${this.jumlahPintu} pintu.`;
  }
}

class Motor extends Kendaraan {
  constructor(merk, model, tipe) {
    super(merk, model);
    this.tipe = tipe;
  }

  getDeskripsi() {
    return `Motor ${this.merk} ${this.model} tipe ${this.tipe}.`;
  }
}

function deskripsikanKendaraan(kendaraan) {
  console.log(kendaraan.getDeskripsi());
}

const mobil_Alif_2467 = new Mobil("Toyota", "Mercy", 4);
const motor_Alif_2467 = new Motor("Yamaha", "Vespa", "classic");


deskripsikanKendaraan(mobil_Alif_2467); 
deskripsikanKendaraan(motor_Alif_2467); 
