"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
let myVar = "name";
myVar = "price";
function getValue(item, keyname) {
    return item[keyname];
}
let p = new dataTypes_1.Product("Running Shoes", 100);
console.log(getValue(p, "name"));
console.log(getValue(p, "price"));
let e = new dataTypes_1.Employee("Bob Smith", "Sales");
console.log(getValue(e, "name"));
console.log(getValue(e, "role"));
