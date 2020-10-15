function calculateTax(amount, discount = 0, ...extraFees) {
    return (amount * 1.2) - discount
        + extraFees.reduce((total, val) => total + val, 0);
}
function writeValue(label, value) {
    console.log(`${label}: ${value}`);
}
writeValue("Tax value", calculateTax(100, 0));
