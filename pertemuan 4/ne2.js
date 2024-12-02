class Hitung {

  tambahOverload(...args) {
    // ...args akan menjadi array

    // Pilihan metode yang bisa di overload
    var tambah1 = function (a, b) {
      // jika fungsi 2 parameter
      return a + b;
    };
    var tambah2 = function (a, b, c) {
      // jika fungsi 3 parameter
      return a + b + c;
    };
    var tambah3 = function (a, b, c, d) {
      // jika fungsi 4 parameter
      return a + b + c + d;
    };

    // Bagian memilih penggunaan metode sesuai dengan jumlah parameter / panjang array
    // array.length akan menghitung banyak elemen dalam array
    if (args.length === 2) {
      // jika banyak elemen dalam array adalah 2
      return tambah1(args[0], args[1]); // akan memilih fungsi dengan array index 0 dan 1
    } else if (args.length === 3) {
      return tambah2(args[0], args[1], args[2]);
    } else if (args.length === 4) {
      return tambah3(args[0], args[1], args[2], args[3]);
    }
  }
}

const hitung1 = new Hitung(); // pembuatan objek
console.log(hitung1.tambahOverload(2, 3)); // Output: 5
console.log(hitung1.tambahOverload(2, 3, 4)); // Output: 9
console.log(hitung1.tambahOverload(2, 3, 4, 5)); // Output: 14

class DataHandler {
    // *Method Overloading* - Mendefinisikan metode dengan tipe parameter yang berbeda
    processData(data) { // Metode yang akan memilih fungsi berdasarkan tipe data parameter
        if (typeof data === "string") { // Memeriksa apakah data adalah tipe string.
            // mengembalikan string yang mengindikasikan bahwa data yang diproses adalah string
            return this.processString(data); 
        } else if (Array.isArray(data)) { // Memeriksa apakah data adalah tipe array.
            // menggabungkan semua elemen array menjadi satu string
            return this.processArray(data); 
        } else if (typeof data === "object") { // Memeriksa apakah data adalah tipe objek (dan bukan null)
            return this.processObject(data); // Mengindikasikan bahwa data yang diproses adalah objek
        } else { // Jika tidak ada kondisi yang terpenuhi, ini akan menghasilkan sebuah 
            // error yang menyatakan bahwa tipe data tidak didukung.
            throw new Error("Tipe data tidak didukung.");
        }
    }

    // Metode untuk mengolah data bertipe string
    processString(str) {
        return `Data string: ${str}`;
    }

    // Metode untuk mengolah data bertipe array
    processArray(arr) {
        return `Data array: ${arr.join(", ")}`;
    }

    // Metode untuk mengolah data bertipe objek
    processObject(obj) {
        const keys = Object.keys(obj);
        return `Data objek: ${keys.map((key) => `${key}: ${obj[key]}`).join(", ")}`;
    }
}

// Membuat instans dari kelas DataHandler.
const dataHandler = new DataHandler();

// Memanggil metode processData dengan string sebagai argumen.
console.log(dataHandler.processData("Hello, world!")); // Output: Data string: Hello, world!

// Memanggil metode processData dengan array sebagai argumen.
console.log(dataHandler.processData([1, 2, 3, 4, 5])); // Output: Data array: 1, 2, 3, 4, 5

// Memanggil metode processData dengan objek sebagai argumen.
console.log(dataHandler.processData({ name: "John", age: 30, city: "New York" }));
// Output: Data objek: name: John, age: 30, city: New York
