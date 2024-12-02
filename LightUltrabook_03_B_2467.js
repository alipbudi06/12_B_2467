const Ultrabook = require("./UltraBook_03_B_X.2467");
class LightUltrabook extends Ultrabook {
  #baterai;

  constructor(harga, brand, berat, baterai) {
    super(harga, brand, berat);
    this.#baterai = baterai;
  }

  informasiBaterai() {
    console.log(
      `Ultrabook merk ini Memiliki daya tahan baterai hingga ${
        this.#baterai
      } jam.`
    );
  }
}

module.exports = LightUltrabook;
