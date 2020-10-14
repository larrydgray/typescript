function calculateTax(amount:any):any{
    return `$${(amount*1.2).toFixed(2)}`;
}
let price: number = 100;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2;

console.log(`Price: ${price}`);
console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half Share: ${halfShare}`);




