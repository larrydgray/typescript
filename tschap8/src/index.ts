
function calculateTax(amount: number,discount=0, ...extraFees:number[]):number{

        return (amount * 1.2) - discount
            + extraFees.reduce((total, val) => total + val, 0);

}
let taxValue=calculateTax(100,0);
console.log(`Tax value: ${taxValue}`);


