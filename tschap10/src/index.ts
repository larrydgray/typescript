

type Person = {
  id: string,
  name: string,
  city: string,
  contact: number
};

type Employee= {
  id:string,
  company: string,
  dept: string,
  contact: string
};

type EmployedPerson = Person & Employee;

let typeTest = ({} as EmployedPerson).contact;

let person1: EmployedPerson = {
    id: "bsmith", name: "Bob Smith", city: "London",
    company: "Acme Co", dept: "Sales", contact: "Alice"};
let person2: EmployedPerson = {
    id: "dpeters", name: "Dora Peters", city: "New York",
    company: "Acme Co", dept: "Development", contact: 6512346543};



