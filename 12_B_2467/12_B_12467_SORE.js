console.log("[BARATIE RESTAURANT]");
console.log("_".repeat(50));

function processPayment(total, bayar, method) {
  try {
    if (typeof total !== "number" || typeof bayar !== "number") {
      throw new Error("Both total price and amount paid must be numbers");
    }
    if (bayar < total) {
      throw new Error("Insufficient payment amount");
    }
    const validMethods = ["cash", "credit", "voucher"];
    if (!validMethods.includes(method)) {
      throw new Error(
        `Unsupported payment method: ${method}. Allowed methods: ${validMethods.join(
          ", "
        )}`
      );
    }
    const change = bayar - total;
    console.log(`Payment successful. Change to return: ${change}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  } finally {
    console.log("Cleaning up resources...");
  }
}

const testCases = [
  { label: "[1]", total: 50, bayar: "fifty", method: "credit" },
  { label: "[2]", total: 50, bayar: 35, method: "cash" },
  { label: "[3]", total: 50, bayar: 75, method: "voucher" },
  { label: "[4]", total: 50, bayar: 75, method: "bitcoin" }, 
];

testCases.forEach(({ label, total, bayar, method }) => {
  console.log(label);
  processPayment(total, bayar, method);
  console.log("_".repeat(50));
});
