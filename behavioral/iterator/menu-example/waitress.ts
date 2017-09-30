import { IMenu } from './interfaces';
import { IIterable, IIterator } from '../interfaces';

export class Waitress {
    constructor(private menus: IIterable[]) {
    }

    public printMenus(): void {
        this.menus.forEach( m => this.printMenu(m.createIterator()));
    }

    private printMenu(menuIterator: IIterator): void {
        while (menuIterator.hasNext()) {
            console.log(menuIterator.next());
        }
    }
}