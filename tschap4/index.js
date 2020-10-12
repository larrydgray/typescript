let hat = {
    name:"hat",
    price: 100,
    getPriceIncIncTax(){
        return Number(this.price) * 1.2;
    }
};

console.log(`Hat: ${hat.price}, ${hat.getPriceIncIncTax()}`);

