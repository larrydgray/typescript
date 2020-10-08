let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootPrice = "100";
console.log(`Boot Price: ${bootPrice}`);

if(hatPrice === bootPrice){
    console.log("Prices are the same");
} else {
    console.log("Prices are different");
}

let totalPrice = Number(hatPrice) + Number(bootPrice);
console.log(`Total Price: ${totalPrice}`);

let myVariable= "Adam";
console.log(`Type: ${typeof myVariable}`);
myVariable= 100;
console.log(`Type: ${typeof myVariable}`);

//fallback example
let firstCity;
let secondCity = firstCity || "London";
console.log(`City: ${ secondCity}`);