import { MenuComponent } from './menu-component';
import { UnsupportedOperationError } from './exceptions';

export class Waitress {
    constructor(private allMenus: MenuComponent) {}

    public printMenus(): void {
        this.allMenus.print();
    }

    public printVegetarianMenus(): void {
        let iterator = this.allMenus.createIterator();

        while (iterator.hasNext()) {
            let component: MenuComponent = iterator.next();

            try {
                if (component.isVegetarian()) {
                    component.print();
                }
            } catch (e: UnsupportedOperationError) {}
        }
    }
}