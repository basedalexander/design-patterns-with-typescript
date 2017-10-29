import { MenuComponent } from './menu-component';

export class MenuItem extends MenuComponent {
    constructor(
        private name: string,
        private description: string,
        private price: number,
        private vegetarian: boolean
    ) {
        super();
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getPrice(): number {
        return this.price;
    }

    public isVegetarian(): boolean {
        return this.vegetarian;
    }

    public print(): void {
        console.log(
            `
                ${this.name}
                ${this.description}
                ${this.vegetarian}
            `
        );
    }
}