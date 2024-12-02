const Laptop = require("./Laptop_03_B_2467");
class LaptopGaming extends Laptop {
  constructor(harga, brand, gpuModel) {
    super(harga, brand);
    this.gpuModel = gpuModel;
  }

  informasiGPU() {
    console.log(
      `Laptop gaming merk ini menggunakan GPU model ${this.gpuModel}.`
    );
  }
}
module.exports = LaptopGaming;
