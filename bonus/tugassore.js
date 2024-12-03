console.log("[BARATIE RESTAURANT]");
console.log("_".repeat(50));

function processPayment(hargaTotal, bayar, metode) {
  try {
    if (typeof hargaTotal !== "number" || typeof bayar !== "number") {
      throw new Error("Both total price and amount given must be numbers");
    }
    if (bayar < hargaTotal) {
      throw new Error("Amount given is less than the total price");
    }
    const validMethods = ["cash", "credit", "voucher"];
    if (!validMethods.includes(metode)) {
      throw new Error(
        `Unknown payment method: ${metode}. Accepted methods: ${validMethods.join(
          ", "
        )}`
      );
    }
    const kembalian = bayar - hargaTotal;
    console.log(`Transaction successful. Change to return: ${kembalian}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  } finally {
    console.log("Cleaning up resources...");
  }
}
const testCases = [
  { label: "[1]", total: 50, bayar: "fifty", metode: "cash" },
  { label: "[2]", total: 50, bayar: 35, metode: "credit" },
  { label: "[3]", total: 50, bayar: 175, metode: "voucher" },
  { label: "[4]", total: 50, bayar: 175, metode: "paypal" },
];

testCases.forEach(({ label, total, bayar, metode }) => {
  console.log(label);
  processPayment(total, bayar, metode);
  console.log("_".repeat(50));
});
