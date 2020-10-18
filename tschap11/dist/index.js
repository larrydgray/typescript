class AbstractDogOwner {
    getDogDetails() {
        if (this.dogName) {
            return `${this.name} has a dog called ${this.dogName}`;
        }
    }
}
class Employee {
    constructor(id, name, dept, city) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    getDetails() {
        return `${this.name} works in ${this.dept}`;
    }
}
class DogOwningCustomer extends AbstractDogOwner {
    constructor(id, name, city, creditLimit, dogName) {
        super();
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
        this.dogName = dogName;
    }
    getDetails() {
        return `${this.name} has ${this.creditLimit} limit`;
    }
}
let alice = new DogOwningCustomer("ajones", "Alice Jones", "London", 500, "Fido");
if (alice.getDogDetails) {
    console.log(alice.getDogDetails());
}
//let data: Person[] = [new Employee("fvega", "Fidel Vega", "Sales","Paris"), alice]
/*
data.forEach(item =>{
        console.log(item.getDetails());
        if (item.getDogDetails){
            console.log(item.getDogDetails());
        }
});*/
