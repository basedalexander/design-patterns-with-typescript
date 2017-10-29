import { IIterator } from '../interfaces';
import { MenuComponent } from './menu-component';

export class NullIterator implements IIterator {
    public hasNext(): boolean {
        return false;
    }

    public next(): MenuComponent {
        return null;
    }
}