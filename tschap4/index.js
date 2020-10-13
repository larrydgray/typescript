import calcTaxAndSum, {calculateTax} from "./tax";

class Product {
    constructor(name, price) {
        this.id= Symbol();
        this.name=name;
        this.price=price;
    }
    toString(){
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

let product = new Product("Hat", 100);
let taxedPrice = calculateTax(product.price);
console.log(`Name: ${product.name}, Taxed Price: ${taxedPrice}`);

let products = [new Product("Gloves", 23), new Product("Boots", 100)];
let totalPrice = calcTaxAndSum(...products.map(p => p.price));
console.log(`Total Price:${totalPrice.toFixed(2)}`);






