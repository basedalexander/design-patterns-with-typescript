export interface IBeverage {
    getName(): string;
    setName(name: string): void;
    getDescription(): string;
    setDescription(desc: string): void;
    getPrice(): number;
    setPrice(price: number): void;
}


export abstract class Beverage implements IBeverage {
    private name: string;
    private description: string;
    private price: number;

    constructor(private addedTo?: IBeverage) {}


    public getName(): string {
        return this.addedTo ? (this.addedTo.getName + ' + ' + this.name) : this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }

    public getDescription(): string {
        return this.description;
    }
    public setDescription(desc: string): void {
        this.description = desc;
    }

    public getPrice(): number {
        return this.addedTo? (this.addedTo.getPrice() + this.price) : this.price;
    }
    public setPrice(price: number): void {
        this.price = price;
    }
}