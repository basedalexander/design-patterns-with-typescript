export enum ProductSize {
    Small,
    Medium,
    Large
}

// It'd be perfectly fine to use interfaces instead of abstract classes
export abstract class Beverage {
    private name: string;
    private size: ProductSize;
    private prises: Map<ProductSize, number> = new Map();

    constructor() {
        this.setSize(ProductSize.Medium); // By default;
    }

    public getName(): string {
        return `${this.size[this.size]} ${this.name}`;
    }
    public setName(name: string): void {
        this.name = name;
    }

    public setSize(size: ProductSize): void {
        this.size = size;
    }
    public getSize(): ProductSize {
        return this.size;
    }

    public getPrice(): number {
        return this.getPriceBySize();
    }

    protected getPriceBySize(): number {
        return this.prises.get(this.getSize());
    }

    protected  setPrices(smallPrice: number, mediumPrice: number, largePrice: number): void {
        this.prises.set(ProductSize.Small, smallPrice);
        this.prises.set(ProductSize.Medium, mediumPrice);
        this.prises.set(ProductSize.Large, largePrice);
    }
}