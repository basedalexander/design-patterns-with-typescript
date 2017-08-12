// It'd be perfectly fine to use interfaces instead of abstract classes
export abstract class Beverage {
    public name: string;
    public price: number;

    public getName(): string {
        return this.name;
    }
    public getPrice(): number {
        return this.price;
    }
}