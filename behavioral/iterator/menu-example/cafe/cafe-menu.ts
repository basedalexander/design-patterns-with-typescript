import { IIterable, IIterator } from '../../interfaces';
import { IMenu, IMenuItem } from '../interfaces';
import { MenuItem } from '../menu-item';
import { CafeMenuIterator } from './cafe-menu-iterator';

export class CafeMenu implements IMenu, IIterable {
    private items: Map<string, IMenuItem> = new Map();

    public addItem(name: string, description: string, price: number, vegetarian: boolean): void {
        let item = new MenuItem(name, description, price, vegetarian);
        this.items.set(item.getName(), item);
    }

    public createIterator(): IIterator {
        return new CafeMenuIterator(this.items);
    }
}