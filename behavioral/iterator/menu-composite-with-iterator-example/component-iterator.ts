import { IStack, Stack } from './stack';
import { IIterator } from '../interfaces';
import { MenuComponent } from './menu-component';
import { Menu } from './menu';

export class ComponentIterator implements IIterator {
    private stack: IStack = new Stack();

    constructor(private iterator: IIterator) {
        this.stack.push(iterator);
    }

    public hasNext(): boolean {
        if (this.stack.empty()) {
            return false;
        }

        let iterator: IIterator = this.stack.peek();

        if (!iterator.hasNext()) {
            this.stack.pop();
            return this.hasNext();
        } else {
            return true;
        }
    }

    public next(): MenuComponent {
        if (this.hasNext()) {
            let iterator: IIterator = this.stack.peek();

            let component: MenuComponent = iterator.next();

            if (component instanceof Menu) {
                this.stack.push(component.createIterator());
            }
            return component;
        } else {
            return null;
        }
    }
}