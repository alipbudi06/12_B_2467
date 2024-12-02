class Kendaraan {
    showKecepatan() {
        return "Kendaraan ini bergerak dengan sangat cepat"
    }
}

class Mobil extends Kendaraan {
    showKecepatan() {
        return "Mobil ini Bergerak dengan kecepatan maksimal 360km/h";
    }
}

class Motor extends Kendaraan {
    showKecepatan() {
        return "Motor memang hanya dapat melaju 1000km/h, namun bisa meliuk";
    }
}
class Pesawat extends Kendaraan {
    showKecepatan() {
        return "Pesawatlah yang tercepat, dapat melaju hingga 500km/h";
    }
}

function ujiKecepatan(Kendaraan) {
    console.log(Kendaraan.showKecepatan());
}

const mobil1 = new Mobil();
const motor1 = new Motor();
const pesawat1 = new Pesawat();
const kendaraan = new Kendaraan();

ujiKecepatan(mobil1);
ujiKecepatan(motor1);
ujiKecepatan(pesawat1);
ujiKecepatan(kendaraan); 