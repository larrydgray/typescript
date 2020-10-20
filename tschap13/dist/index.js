"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
function processArray(data, func) {
    return data.map(item => func(item));
}
let selectName = (p) => p.name;
let products = [new dataTypes_1.Product("Kayak", 275), new dataTypes_1.Product("Lifejacket", 48.95)];
let names = processArray(products, selectName);
names.forEach(name => console.log(`Name: ${name}`));
