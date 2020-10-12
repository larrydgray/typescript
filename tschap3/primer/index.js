let hat = {
    name:"hat",
    _price: 100,
    priceIncTax: 100 *1.2,
    set price(newPrice){
        this._price = newPrice * 1.2;
        this.priceIncTax = this._price * 1.2;
    },
    get price(){
        return this._price;
    },
    writeDetails: () =>
        console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`)
};
hat.writeDetails();
