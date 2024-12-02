// class IBangunDatar {
//     luas() {
//         throw new Error("Metode luas() harus diimplementasikan.");
//     }

//     keliling() {
//         throw new Error("Merode keliling() harus diimplementasikan.");
//     }
// }

// class Persegi extends IBangunDatar {
//     constructor(sisi) {
//         super();
//         this.sisi = sisi;
//     }

//     luas() {
//         return this.sisi * this.sisi;
//     }

//     keliling() {
//         return 4 * this.sisi;
//     }
// }

// class PersegiPanjang extends IBangunDatar {
//     constructor(panjang,lebar) {
//         super();
//         this.panjang = panjang;
//         this.lebar = lebar;
//     }

//     luas() {
//         return (this.panjang * this.lebar);
//     }

//     keliling() {
//         return 2 * (this.panjang + this.lebar);
//     }
// }

// const persegi1 = new Persegi(5);
// console.log("Luas Persegi:", persegi1.luas());
// console.log("Keliling Persegi:", persegi1.keliling());
// console.log("=======================")
// const PersegiPanjang1 = new PersegiPanjang (2467, 2467);
// console.log("Luas Persegi Panjang ",PersegiPanjang1.luas());
// console.log("Keliling Persegi Panjang ",PersegiPanjang1.keliling());



const IHitungLuas = (Base) =>
    class {
        luas() {
            throw new Error(
                "Metode 'luas()'harus diimplementasikan di kelas turunan."
            );
        }
    };

    const IHitungKeliling = () =>
        class {
            keliling() {
                throw new Error(
                    "Metode 'keliling()' harus diimplementasikan di kelas turunan."
                );
            }
        };

class Persegi extends IHitungKeliling(IHitungLuas()) {
    constructor(sisi) {
        super("Persegi");
        this.sisi = sisi;
    }
    
    luas() {
        return this.sisi * this.sisi;
    }

    keliling() {
        return 4 * this.sisi;
    }
}

class PersegiPanjang extends IHitungKeliling(IHitungKeliling) {
    constructor(panjang,lebar) {
        super();
        this.panjang = panjang;
        this.lebar = lebar;
    }

    luas() {
        return (this.panjang * this.lebar);
    }

    keliling() {
        return 2 * (this.panjang + this.lebar);
    }
} 

const persegi = new Persegi(5);
console.log("Luas Persegi:" , persegi.luas());
console.log("Keliling Persegi:", persegi.keliling());
console.log("=====================")
const persegipanjang1 = new PersegiPanjang(2467,2467);
console.log("Luas Persegi Panjang: ", persegipanjang1.luas());
console.log("Keliling Persegi Panjang: ", persegipanjang1.keliling());