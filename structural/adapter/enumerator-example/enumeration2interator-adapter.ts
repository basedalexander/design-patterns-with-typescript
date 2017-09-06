import { IIterator } from './iterator.interface';
import { IEnumeration } from './enumeration.interface';

export class Enumeration2IteratorAdapter implements IIterator {

    constructor(private adaptee: IEnumeration) {}

    public hasNext(): boolean {
        return this.adaptee.hasMoreElements();
    }

    public next(): any {
        return this.adaptee.nextElement();
    }

    public remove(): void {
        throw new Error('Unsopported operation');
    }
}