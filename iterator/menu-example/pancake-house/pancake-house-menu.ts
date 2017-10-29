import { MenuItem } from '../menu-item';
import { IMenu, IMenuItem } from '../interfaces';

export class PancakeHouseMenu implements IMenu {
    private items: IMenuItem[] = [];

    public addItem(name: string, description: string, price: number, vegetarian: boolean): void {
        this.items.push(new MenuItem(name, description, price, vegetarian));
    }
}