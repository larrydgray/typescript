declare type Person = {
    name: string;
    getDetails(): string;
    dogName?: string;
    getDogDetails?(): any;
};
interface DogOwner extends Person {
    dogName: string;
    getDogDetails(): string;
}
declare abstract class AbstractDogOwner implements Person {
    abstract name: string;
    abstract dogName?: string;
    abstract getDetails(): any;
    getDogDetails(): string;
}
declare class Employee implements Person {
    readonly id: string;
    name: string;
    private dept;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    getDetails(): string;
}
declare class DogOwningCustomer extends AbstractDogOwner {
    readonly id: string;
    name: string;
    city: string;
    creditLimit: number;
    dogName: any;
    constructor(id: string, name: string, city: string, creditLimit: number, dogName: any);
    getDetails(): string;
}
declare let alice: DogOwningCustomer;
