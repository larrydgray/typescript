function calculatePrice(quantity, price) {
    return quantity * price;
}
let total = calculatePrice(2, 19.99);
console.log(`Price: ${total}`);
function getRandomValue() {
    return Math.floor(Math.random() * 4) + 1;
}
var City;
(function (City) {
    City["London"] = "LON";
    City["Paris"] = "PAR";
    City["Chicago"] = "CHI";
})(City || (City = {}));
function getValue(input) {
    return [["Apples", 100, 2], ["Oranges", true, 3]];
}
let result = getValue([["Bananas", true, 1]]);
console.log(`Result: ${result}`);
