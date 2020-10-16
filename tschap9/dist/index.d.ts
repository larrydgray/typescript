declare function calculatePrice(quantity: 1 | 2, price: number): number;
declare let total: number;
declare function getRandomValue(): 1 | 2 | 3 | 4;
declare enum City {
    London = "LON",
    Paris = "PAR",
    Chicago = "CHI"
}
declare type comboType = [string, number | true, 1 | 2 | 3 | City.London][];
declare function getValue(input: comboType): comboType;
declare let result: comboType;
