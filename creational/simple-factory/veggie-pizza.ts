import { Pizza } from './pizza';

export class VeggiePizza extends Pizza {
    constructor() {
        super();
        this.name = 'Veggie Pizza';
        this.dough = 'normal dough';
        this.sauce = 'normal sauce';
    }
}