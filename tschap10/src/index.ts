

type Product = {
  id: number,
  name: string,
  price?: number
};

type Person = {
  id: string,
  name: string,
  city: string
};

type UnionType = {
  id: number | string,
  name: string
};

let hat  = {id: 1, name: "Hat", price: 100};
let gloves  = {id: 2, name: "Gloves", price: 75};
let umbrella = {id: 3, name: "Umbrella", price:30};
let bob = {id: "bsmith", name:"Bob", city:"London"};


let dataItems: (Person|Product)[]=[hat, gloves, umbrella, bob];

dataItems.forEach(item => {
  if("price" in item){
    console.log(`Person: ${item.name}: ${item.city}`);
  }else {
    console.log(`Product: ${item.name}: ${item.price}`);
  }
});


