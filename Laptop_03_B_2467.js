class Laptop {
  #harga;
  #brand;

  constructor(harga, brand) {
    this.#harga = harga;
    this.#brand = brand;
  }

  informasiLaptop() {
    console.log(
      `Laptop Merk ${this.#brand} Memiliki harga sebesar Rp${this.#harga} `
    );
  }

  ubahHarga(diskon) {
    this.#harga -= diskon;
    console.log(
      `Harga Laptop Merk ${this.#brand} Memiliki diskon menjadi Rp${
        this.#harga
      }`
    );
  }
}

module.exports = Laptop