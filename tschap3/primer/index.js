let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boot Price: ${bootsPrice}`);

function sumPrices(...numbers){
    return numbers.reduce(function (total, val) {
        return total+(Number.isNaN(Number(val))?0:Number(val));
    }, 0);
}


let totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPrices(100, 200, 300);
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPrices(100, 200, undefined, false, "hello");
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);


if(hatPrice === bootsPrice){
    console.log("Prices are the same");
} else {
    console.log("Prices are different");
}

totalPrice = Number(hatPrice) + Number(bootsPrice);
console.log(`Total Price: ${totalPrice}`);

let myVariable= "Adam";
console.log(`Type: ${typeof myVariable}`);
myVariable= 100;
console.log(`Type: ${typeof myVariable}`);

//fallback example
let firstCity;
let secondCity = firstCity || "London";
console.log(`City: ${ secondCity}`);