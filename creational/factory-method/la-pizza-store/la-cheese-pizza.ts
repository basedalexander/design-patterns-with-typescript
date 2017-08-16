import { Pizza } from '../../simple-factory/pizza';

export class LACheesePizza extends Pizza {
    constructor() {
        super();
        this.name = 'LA Cheese Pizza';
        this.dough = 'thin dough';
        this.sauce = 'chilly sauce';
    }
}