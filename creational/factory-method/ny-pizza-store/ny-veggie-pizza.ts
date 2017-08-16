import { Pizza } from '../../simple-factory/pizza';

export class NYVeggiePizza extends Pizza {
    constructor() {
        super();
        this.name = 'NY Veggie Pizza';
        this.dough = 'thick dough';
        this.sauce = 'light sauce';
    }
}