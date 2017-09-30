import { IIterator } from '../../interfaces';
import { IMenuItem } from '../interfaces';

export class CafeMenuIterator implements IIterator {
    private values: IMenuItem[];
    private currentIndex: number = 0;

    constructor(private items: Map<string, IMenuItem>) {
        this.values = items.values();
    }

    public hasNext(): boolean {
        return (this.currentIndex < (this.values.length - 1));
    }

    public next(): any {
        let nextItem: IMenuItem = this.values[this.currentIndex];
        this.currentIndex = this.currentIndex + 1;
        return nextItem;
    }
}