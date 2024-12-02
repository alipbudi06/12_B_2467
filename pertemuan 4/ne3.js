class Kendaraan {
    bergerak() {
        console.log("Kendaraan ini sedang bergerak. ");
    
    }

    berhenti() {
        console.log("Kendaraan ini sedang berhenti.");
    }
}

class Mobil extends Kendaraan {
    bergerak() {
        console.log("Mobil ini melaju dengan kecepatan tinggi!");
    }

    hidupkanMesin() {
        console.log("Mesin mobil ini dihidupkan.");
    }
}

class Sepeda extends Kendaraan {
    bergerak() {
        console.log("sepeda ini dipedal dengan santai.");
    }

    gantiGear() {
        console.log ("gear sepeda diubah.");
    }

}
const kendaraan = new Kendaraan();
const mobil = new Mobil();
const sepeda= new Sepeda();
kendaraan.bergerak();
kendaraan.berhenti();
console.log("=========================");
mobil.bergerak();
mobil.hidupkanMesin();
mobil.berhenti();
console.log("=========================");
sepeda.bergerak();
sepeda.gantiGear();
sepeda.berhenti();