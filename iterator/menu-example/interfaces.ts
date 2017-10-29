import { IIterable } from '../interfaces';

export interface IMenuItem {
    getName(): string;
    getDescription(): string;
    getPrice(): number;
    isVegetarian(): boolean;
}

export interface IMenu extends IIterable {
    addItem(name: string, description: string, price: number, vegetarian: boolean): void;
}