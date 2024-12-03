console.log("[BARATIE RESTAURANT]");
console.log("_".repeat(50));

function processPayment(total, bayar, method) {
  try {
    if (typeof total !== "number" || typeof bayar !== "number") {
      throw new Error("Both total price and amount given must be numbers");
    }
    if (bayar < total) {
      throw new Error("Amount given is less than the total price");
    }
    const validMethods = ["cash", "credit", "voucher"];
    if (!validMethods.includes(method)) {
      throw new Error("Unknown payment method");
    }
    if (method === "voucher") {
      console.log("Processing voucher payment...");
    }
    const change = bayar - total;
    console.log(`Transaction successful. Change to return: ${change}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  } finally {
    console.log("Cleaning up resources...");
  }
}

const testCases = [
  { label: "[1]", total: 50, bayar: "fifty", method: "credit" },
  { label: "[2]", total: 50, bayar: 35, method: "cash" },
  { label: "[3]", total: 50, bayar: 467, method: "voucher" }, 
  { label: "[4]", total: 50, bayar: 75, method: "bitcoin" },
];

testCases.forEach(({ label, total, bayar, method }) => {
  console.log(label);
  processPayment(total, bayar, method);
  console.log("_".repeat(50));
});
