class PackageDelivery {
  constructor(id, weight, distance) {
    this.id = id; 
    this.weight = weight; 
    this.distance = distance; 
  }

  calculate() {
    const baseRate = 1500; 
    return this.weight * this.distance * baseRate;
  }
}

class PackageDeliveryPrinter {
  print(item) {
    const cost = item.calculate();
    console.log(`Mencetak label pengiriman:
        Berat ${item.weight} kg
        Jarak ${item.distance} km
        Harga Rp.${cost}`);
  }
}

class PackageDeliveryDatabase {
  save(item) {
    console.log(
      `Menyimpan paket dengan id ${item.id} ke dalam database pengiriman...`
    );
  }
}

console.log("SRP2_B_12467");

const package1 = new PackageDelivery("B_12467", 10, 10); 
const printer = new PackageDeliveryPrinter();
const saver = new PackageDeliveryDatabase();

printer.print(package1);
saver.save(package1);
