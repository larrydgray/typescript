import { City, Person, Product, Employee} from "./dataTypes";
type shapeType = {name:string};
interface Collection<T extends shapeType> {
        add(...newItems: T[]): void;
        get(name:string):T;
        count:number;
}
class ArrayCollection<T extends shapeType> implements Collection<T>{
        protected items: T[] = [];

        add(...newItems): void {
                this.items.push(...newItems);
        }

        get(name: string): T {
                return this.items.find(item => item.name === name);
        }

        get count():number {
                return this.items.length;
        }
}
class ProductCollection extends ArrayCollection<Product>{
        get(searchTerm:string): Product {
                return this.items.find(item => item.name === name);
        }
}
class PersonCollection extends ArrayCollection<Person>{




        get(searchTerm:string): Person {
                return this.items.find(item => item.name === name|| item.city === name);
        }
}

let peopleCollection: Collection<Person>= new PersonCollection();
peopleCollection.add(new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York"));
let productCollection: Collection<Product> = new ProductCollection();
productCollection.add(new Product("Running Shoes", 100), new Product("Hat", 25));
[peopleCollection, productCollection].forEach(c => console.log(`Size: ${c.count}`));
