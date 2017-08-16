import { Pizza } from '../../simple-factory/pizza';

export class NYCheesePizza extends Pizza {
    constructor() {
        super();
        this.name = 'NY Cheese Pizza';
        this.dough = 'thick dough';
        this.sauce = 'light sauce';
    }
}