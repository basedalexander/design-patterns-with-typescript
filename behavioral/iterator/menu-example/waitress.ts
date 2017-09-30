import { IMenu } from './interfaces';
import { IIterable, IIterator } from '../interfaces';

export class Waitress {
    constructor(private dinnerMenu: IIterable, private pancakeHouseMenu: IIterable) {
    }

    public printMenus(): void {
        let dinnerMenuIterator: IIterator = this.dinnerMenu.createIterator();
        let pancakeHouseMenuIterator: IIterator = this.pancakeHouseMenu.createIterator();
        this.printMenu(pancakeHouseMenuIterator);
    }

    private printMenu(menuIterator: IIterator): void {
        while (menuIterator.hasNext()) {
            console.log(menuIterator.next());
        }
    }
}