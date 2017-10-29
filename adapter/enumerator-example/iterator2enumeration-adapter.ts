import { IEnumeration } from './enumeration.interface';
import { IIterator } from './iterator.interface';

export class Iterator2EnumerationAdapter implements IEnumeration {
    constructor(private adaptee: IIterator) {

    }

    public hasMoreElements(): boolean {
        return this.adaptee.hasNext();
    }

    public nextElement(): any {
        return this.adaptee.next();
    }
}