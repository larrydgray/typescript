let hat = {
    name:"hat",
    price: 100,
    getPriceIncIncTax(){
        return Number(this.price) * 1.2;
    }
};
let boots = {
    name: "Boots",
    price: 100,
    getPriceIncIncTax(){
        return Number(this.price) * 1.2;
    }
}

let hatPrototype = Object.getPrototypeOf(hat);
console.log(`Hat Prototype: ${hatPrototype}`);

let bootsPrototype =  Object.getPrototypeOf(boots);
console.log(`Boots Prototype: ${bootsPrototype}`);

console.log(`Common prototype: ${ hatPrototype === bootsPrototype}`);

