function calculateTax(amount: number):number {
    return amount * 1.2;
}

function writePrice(product: string, price:number):void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
enum OtherEnum { First=10, Two=20}
enum Product { Hat=OtherEnum.First+1, Gloves=20, Umbrella =Hat+Gloves}

let productValue: Product = 11;
let productName: string = Product[productValue];
console.log(`Value: ${productValue}, Name: ${productName}`);

