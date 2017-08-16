import { Pizza } from '../../simple-factory/pizza';

export class LAVeggiePizza extends Pizza {
    constructor() {
        super();
        this.name = 'LA Veggie Pizza';
        this.dough = 'thin dough';
        this.sauce = 'chilly sauce';
    }
}