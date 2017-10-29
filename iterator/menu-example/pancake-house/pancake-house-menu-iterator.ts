import { IIterator } from '../../interfaces';

// It's supposed to be a defferent implementation, but I'm a bit lazy right now. You get the idea
export class PancakeHouseMenuIterator implements IIterator {
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