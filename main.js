const LightUltrabook = require("./LightUltrabook_03_B_2467")
const HighLaptop = require("./HighLaptop_03_B_2467")

const HighLaptop1 = new HighLaptop(22000000, "ADVAN", "NVIDIA RTX 3090", 2100);
HighLaptop1.informasiGPU();
HighLaptop1.informasiOverLimit();
const ultrabookRingan = new LightUltrabook(22000000, "HP", "1.0 kg", 12);
ultrabookRingan.informasiLaptop();
ultrabookRingan.informasiBerat();
ultrabookRingan.informasiBaterai();
console.log(HighLaptop1.harga);
console.log(HighLaptop1.gpuModel);