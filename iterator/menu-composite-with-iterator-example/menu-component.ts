import { UnsupportedOperationError } from './exceptions';
import { IIterator } from '../interfaces';

export abstract class MenuComponent {
    getName(): string {
        throw new UnsupportedOperationError();
    }

    getDescription(): string {
        throw new UnsupportedOperationError();
    }

    getPrice(): number {
        throw new UnsupportedOperationError();
    }

    isVegetarian(): boolean {
        throw new UnsupportedOperationError();
    }

    addItem(item: MenuComponent): void {
        throw new UnsupportedOperationError();
    }

    removeItem(item: MenuComponent): void {
        throw new UnsupportedOperationError();
    }

    getItem(index: number): void {
        throw new UnsupportedOperationError();
    }

    print(): void {
        throw new UnsupportedOperationError();
    }

    abstract createIterator(): IIterator;
}