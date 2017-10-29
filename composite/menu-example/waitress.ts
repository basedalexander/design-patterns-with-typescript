import { MenuComponent } from './menu-component';

export class Waitress {
    constructor(private allMenus: MenuComponent) {}

    public printMenus(): void {
        this.allMenus.print();
    }
}