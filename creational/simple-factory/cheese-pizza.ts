import { Pizza } from './pizza';

export class CheesePizza extends Pizza {
    constructor() {
        super();
        this.name = 'Cheese Pizza';
        this.dough = 'normal dough';
        this.sauce = 'normal sauce';
    }
}