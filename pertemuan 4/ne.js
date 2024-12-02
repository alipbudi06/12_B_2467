class Hewan {
    suara() {
        console.log("Hewan ini sedang bersuara.");
    }

    berjalan() {
        console.log("Hewan ini berjalan.");
    }
}

class Burung extends Hewan {
    suara() {
        console.log("Burung sedang bersuara: Cuit cuit!");
    }

    terbang() {
        console.log("Burung ini terbang");
    }
}

class Ikan extends Hewan {
    suara() {
        console.log("Ikan ini bersuara: ang ang ang!");
    }

    berenang() {
        console.log("ikan ini sedang berenang.");
    }
}
const hewan = new Hewan();
const burung = new Burung();
const ikan = new Ikan();

hewan.suara();
hewan.berjalan();
console.log("========================");
burung.suara();
burung.berjalan();
burung.terbang();
console.log("========================");
ikan.suara();
ikan.berenang();