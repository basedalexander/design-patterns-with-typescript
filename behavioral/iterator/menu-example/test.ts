import { IMenu } from './interfaces';
import { DinnerMenu } from './dinner/dinner-menu';
import { PancakeHouseMenu } from './pancake-house/pancake-house-menu';
import { CafeMenu } from './cafe/cafe-menu';
import { Waitress } from './waitress';

let dinnerMenu: IMenu = new DinnerMenu();
dinnerMenu.addItem('Soup', '...', 0.5, false);
dinnerMenu.addItem('Cake', '...', 1, true);
dinnerMenu.addItem('Pasta', '...', 12, true);

let pancakeMenu: IMenu = new PancakeHouseMenu();
pancakeMenu.addItem('Soup', '...', 0.5, false);
pancakeMenu.addItem('Cake', '...', 1, true);
pancakeMenu.addItem('Pasta', '...', 12, true);

let cafeMenu: IMenu = new CafeMenu();
cafeMenu.addItem('Soup', '...', 0.5, false);
cafeMenu.addItem('Cake', '...', 1, true);
cafeMenu.addItem('Pasta', '...', 12, true);


let menus = [
    dinnerMenu,
    pancakeMenu,
    cafeMenu
];

let waitress = new Waitress(menus);