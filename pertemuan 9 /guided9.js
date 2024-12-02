// class Dokter {
//   constructor(nama, spesialisasi) {
//     this.nama = nama;
//     this.spesialisasi = spesialisasi;
//   }
// }

// class Pasien {
//   constructor(nama, usia) {
//     this.nama = nama;
//     this.usia = usia;
//   }
// }

// class JadwalKonsultasi {
//   constructor(dokter, pasien, waktuKonsultasi) {
//     this.dokter = dokter;
//     this.pasien = pasien;
//     this.waktuKonsultasi = waktuKonsultasi;
//   }

//   tampilInformasi() {
//     console.log(`Dokter: ${this.dokter.nama}`);
//     console.log(`Spesialisasi: ${this.dokter.spesialisasi}`);
//     console.log(`Pasien: ${this.pasien.nama}`);
//     console.log(`Usia Pasien: ${this.pasien.usia}`);
//     console.log(`Waktu Konsultasi: ${this.waktuKonsultasi}`);
//   }
// }

// const dokter1 = new Dokter("Dr. Budi", "Kardiologi");
// const pasien1 = new Pasien("Andi", 45);
// const konsultasi1 = new JadwalKonsultasi(dokter1,pasien1,"10:00 Pagi, 5 Juni 2024");

// konsultasi1.tampilInformasi();

// class MataPelajaran {
//     constructor(nama) {
//         this.nama = nama;
//     }
// }
// class Guru {
//     constructor(namaGuru) {
//         this.namaGuru = namaGuru;
//         this.mataPelajaran = [];
//     }

//     tambahMataPelajaran(mataPelajaran) {
//         this.mataPelajaran.push(mataPelajaran);
//     }

//     tampilkanInfo() {
//         console.log(`Guru: ${this.namaGuru}`);
//         console.log("Mata Pelajaran yang diajarkan:");
//         this.mataPelajaran.forEach(mp => console.log(`- ${mp.nama}`));
//     }
// }

// class Sekolah {
//     constructor(namaSekolah) {
//         this.namaSekolah = namaSekolah;
//         this.daftarGuru = [];
//     }

//     tambahGuru(guru) {
//         this.daftarGuru.push(guru);
//     }

//     tampilkanDaftarGuru() {
//         console.log(`Sekolah: ${this.namaSekolah}`);
//         this.daftarGuru.forEach(guru => guru.tampilkanInfo());
//     }
// }

// const sekolah1 = new Sekolah("SMA Negeri 08 Maros");

// const guru1 = new Guru("Bu ti");
// const guru2 = new Guru("Pak gus");

// const mataPelajaran1 = new MataPelajaran("Matematika");
// const mataPelajaran2 = new MataPelajaran("Fisika");
// const mataPelajaran3 = new MataPelajaran("Kimia");
// const mataPelajaran4 = new MataPelajaran("Biologi");

// guru1.tambahMataPelajaran(mataPelajaran1);
// guru1.tambahMataPelajaran(mataPelajaran2);
// guru2.tambahMataPelajaran(mataPelajaran3);
// guru2.tambahMataPelajaran(mataPelajaran4);

// sekolah1.tambahGuru(guru1);
// sekolah1.tambahGuru(guru2);

// sekolah1.tampilkanDaftarGuru();


// class Memori {
//     constructor(jenis, kapasitas) {
//         this.jenis = jenis;
//         this.kapasitas = kapasitas;
//     }
// }

// class Komputer {
//     constructor(merk, jenisMemori, kapasitasMemori) {
//         this.merk = merk;
//         this.memori = new Memori(jenisMemori, kapasitasMemori); 
//     }

//     tampilkanSpesifikasi() {
//         console.log(`Komputer Merk: ${this.merk}`);
//         console.log(`Jenis Memori: ${this.memori.jenis}, Kapasitas: ${this.memori.kapasitas}`);
//     }
// }
// const komputer1 = new Komputer("Dell", "DDR4", "16GB");
// komputer1.tampilkanSpesifikasi();

class MathHelper {
  static PHI = 3.14;

  static kelilingLingkaran(radius) {
    return (2 * this.PHI * radius).toFixed(2);
  }

  static luasLingkaran(radius) {
    return (this.PHI * radius * radius).toFixed(2);
  }

  static luasPermukaanTabung(radius, tinggi) {
    return 2 * this.PHI * radius * (radius + tinggi).toFixed(2);
  }

  static volumeTabung(radius, tinggi) {
    return (this.PHI * radius * radius * tinggi).toFixed(2);
  }
}
console.log(`Keliling Lingkaran : ${MathHelper.kelilingLingkaran(7)}`);
console.log(`Luas Lingkaran : ${MathHelper.luasLingkaran(7)}`);
console.log(`Luas Permukaan Tabung : ${MathHelper.luasPermukaanTabung(7, 10)}`);
console.log(`Volume Tabung : ${MathHelper.volumeTabung(7, 10)}`);

