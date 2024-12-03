console.log("PENDAFTARAN MAHASISWA BARU UNIVERSITAS CENDRAWASIH");
console.log("_".repeat(50));

function calculateAge(tanggalLahir) {
  const today = new Date();
  const birthDate = new Date(tanggalLahir);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

function validateData(studentData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!studentData.nama || !studentData.tanggal || !studentData.ktp) {
        reject("Invalid data");
      } else {
        const umur = calculateAge(studentData.tanggal); 
        if (umur < 17) {
          reject("Student is too young");
        } else if (studentData.ktp.length !== 16 || isNaN(studentData.ktp)) {
          reject("Invalid KTP number");
        } else {
          resolve(
            `Student ${studentData.nama} has been successfully registered`
          );
        }
      }
    }, 5000); 
  });
}

async function processData(studentData) {
  try {
    const result = await validateData(studentData);
    console.log(result);
  } catch (error) {
    console.log(`An error occurred: ${error}`);
  }
}

processData({ nama: "", tanggal: "2002-05-12", ktp: "1234567890123456" });
processData({ nama: "Fahmy", tanggal: "2008-04-01", ktp: "1234567890123456" });
processData({ nama: "Kevin", tanggal: "2003-03-15", ktp: "12345" });
processData({ nama: "Alip", tanggal: "2005-10-10", ktp: "2317124671234567" });
processData({ nama: "Kay", tanggal: "2001-06-21", ktp: "1122334455667788" });
