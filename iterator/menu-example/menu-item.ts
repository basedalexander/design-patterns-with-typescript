import { IMenuItem } from './menu-item.interface';

export class MenuItem implements IMenuItem {
    constructor(
        private name: string,
        private description: string,
        private price: number,
        private vegetarian: boolean
    ) {}

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
}