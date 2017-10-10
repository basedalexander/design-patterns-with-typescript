import { IIterator } from '../interfaces';

declare const Symbol;

import { MenuComponent } from './menu-component';

export class Menu extends MenuComponent {
    private items: MenuComponent[] = [];

    constructor(
        private name: string,
        private description: string
    ) {
        super();
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public addItem(item: MenuComponent): void {
        this.items.push(item);
    }

    public removeItem(item: MenuComponent): void {
        let index: number = this.items.indexOf(item);
        this.items.splice(index, 1);
    }

    public getItem(index: number): MenuComponent {
        return this.items[index];
    }

    public print(): void {

        console.log(this.getName());
        console.log(this.getDescription());
        console.log('--------------------');

        let iterator = this.items[Symbol.iterator]();

        while (true) {
            let item: { value: MenuComponent, done: boolean } = iterator.next();

            if (item.done) {
                break;
            }

            item.value.print();
        }
    }

    public createIterator(): IIterator {

    }
}