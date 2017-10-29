import { Waitress } from './waitress';
import { MenuComponent } from './menu-component';
import { Menu } from './menu';

let menus: MenuComponent = new Menu('Hollywood', 'Pizza menu');

let waitress = new Waitress(menus);

waitress.printMenus();

waitress.printVegetarianMenus();