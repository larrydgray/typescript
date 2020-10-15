function calculateTax(amount: number):number {
    return amount * 1.2;
}

function writePrice(product: string, price:number):void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

enum Product { Hat, Gloves, Umbrella}

[Product.Hat, Product.Gloves, Product.Umbrella].forEach(val =>{
    console.log(`Number value: ${val}`);
});

let products: [Product, number][] = [[Product.Hat, 100], [Product.Gloves, 75]];

products.forEach((prod: [Product, number])=> {
    switch (prod[0]){
        case Product.Hat:
            writePrice("Hat", calculateTax(prod[1]));
            break;
        case Product.Gloves:
            writePrice("Gloves", calculateTax(prod[1]));
            break;
        case Product.Umbrella:
            writePrice("Umbrella", calculateTax(prod[1]));
            break;
    }
});