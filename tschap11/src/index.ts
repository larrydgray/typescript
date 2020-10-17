abstract class Person  {
    constructor(public id: string, public name: string,
                public city:string) {
    }
    getDetails(): string {
       return `${this.name}, ${this.getSpecificDetails()}`;
    }
    abstract getSpecificDetails(): string;
}

class Employee extends Person{
    constructor(public readonly  id: string, public name:  string,
                private dept: string, public city:string) {
        super(id,name,city);
    }
    writeDept(){
        console.log(`${this.name} works in ${this.dept}`);
    }

    getSpecificDetails(): string {
        return `works in ${this.dept}`;
    }

}

class Customer extends Person{
    constructor(public readonly id: string, public name: string,
                public city: string, public creditLimit: number) {
        super(id,name,city);
    }

    getSpecificDetails(): string {
        return `has ${this.creditLimit}`;
    }
}

class Supplier extends  Person{
    constructor(public readonly id: string, public name: string,
                public city: string, public companyName: string) {
        super(id,name,city);
    }

    getSpecificDetails(): string {
        return `works for ${this.companyName}`;
    }
}

let data: Person[] = [new Employee("fvega", "Fidel Vega", "Sales","Paris"),
    new Customer("ajones", "Alice Jones", "London",500)];

data.forEach(item => {
    console.log(item.getDetails());
});

data.push( new Supplier("dpeters", "Dora Peters", "New York", "Acme"));

data.forEach(item=>{
    console.log(`Person: ${item.name}, ${item.city}`);
    if(item instanceof Employee){
        item.writeDept();
    }else if(item instanceof Customer){
        console.log(`Customer ${item.name} has  ${item.creditLimit} limit`);
    }else if(item instanceof  Supplier){
        console.log(`Supplier ${item.name} works for ${item.companyName}`);
    }

});

//let salesEmployee = new Employee("fvega", "Fidel Vego", "Sales", "Paris");

//salesEmployee.writeDept();
//salesEmployee.id="fidel";

/*
let data: (Person | Employee)[] =
    [{id: "bsmith", name: "Bob Smith", city: "London"},
    {id: "ajones", name: "Alice Jones", city: "Paris"},
    {id: "dpeters", name:"Dora Peters", city: "New York"},
    salesEmployee];

data.forEach(item=>{
    if(item instanceof Employee){
        item.writeDept();
    }else {
        console.log(`${item.id} ${item.name}, ${item.city}`);
    }
});*/