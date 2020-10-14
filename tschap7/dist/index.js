function calculateTax(amount, format) {
    const calcAmount = amount * 1.2;
    return format ? `$${(amount * 1.2).toFixed(2)}` : calcAmount;
}
let taxNumber = calculateTax(100, false);
let taxString = calculateTax(100, true);
let taxBoolean = calculateTax(100, false);
console.log(`Number value: ${taxNumber.toFixed(2)}`);
console.log(`String value: ${taxString.charAt(0)}`);
console.log(`Boolean Value: ${taxBoolean}`);
