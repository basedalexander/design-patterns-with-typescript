import { IIterator } from './interfator.interface';
import { IEnumerator } from './enumerator.interface';

export class EnumeratorIteratorAdapter implements IIterator {

    constructor(private adaptee: IEnumerator) {}

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