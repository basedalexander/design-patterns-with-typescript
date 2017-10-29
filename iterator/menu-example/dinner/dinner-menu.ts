import { MenuItem } from '../menu-item';
import { IIterable, IIterator } from '../../interfaces';
import { IMenu, IMenuItem } from '../interfaces';
import { DinnerMenuIterator } from './dinner-menu-iterator';

export class DinnerMenu implements IMenu, IIterable {
    private items: IMenuItem[] = [];

    public addItem(name: string, description: string, price: number, vegetarian: boolean): void {
        this.items.push(new MenuItem(name, description, price, vegetarian));
    }

    public createIterator(): IIterator {
        return new DinnerMenuIterator(this.items);
    }
}