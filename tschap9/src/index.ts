function calculateTax(amount: number):number {
    return amount * 1.2;
}

function writePrice(product: string, price:number):void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let hat: [string, number]=["Hat",100];
let gloves: [string, number]=["Gloves",75];

let products: [string, number][] = [["Hat",100],["Gloves",75]];
let tupleUnion: ([string,number]|boolean)[]=[true,false,hat,...products];

tupleUnion.forEach((elem: [string,number]|boolean) => {
    if(elem instanceof  Array){
        elem.forEach((tupleElem: string|number)=> {
         if(typeof tupleElem === "string"){
             console.log(`String value: ${tupleElem}`);
         }else{
             console.log(`Number value: ${tupleElem}`);
         }
        });
    }else if (typeof elem === "boolean"){
        console.log(`Boolean Value: ${elem}`);
    }
});


writePrice(hat[0], hat[1]);
writePrice(gloves[0],gloves[1]);