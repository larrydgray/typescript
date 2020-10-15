
function calculateTax(amount: number|null,discount=0, ...extraFees:number[]){
    if(amount!=null) {
        return (amount * 1.2) - discount
            + extraFees.reduce((total, val) => total + val, 0);
    }
}
let taxValue=calculateTax(null,0);
console.log(`Tax value: ${taxValue}`);


