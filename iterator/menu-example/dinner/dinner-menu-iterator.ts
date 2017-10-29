import { IIterator } from '../../interfaces';

export class DinnerMenuIterator implements IIterator {
    private currentIndex: number = 0;

    constructor(private items: any[]) {
    }

    public hasNext(): boolean {
        return this.currentIndex < (this.items.length - 1);
    }

    public next(): boolean {
        return this.items[this.currentIndex++];
    }
}