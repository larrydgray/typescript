function calculateTax(amount: number):number {
    return amount * 1.2;
}

function writePrice(product: string, price:number):void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

const enum Product { Hat, Gloves, Umbrella}
let productValue: Product = Product.Hat;
let productName = Product[0];


