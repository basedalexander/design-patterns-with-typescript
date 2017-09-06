import { Beverage } from './beverage';

export class Americano extends Beverage {
    constructor() {
        super();
        this.setName('Americano');
        this.setPrices(0.5, 1, 1.5);
    }
}

export class DarkRoast extends Beverage {
    constructor() {
        super();
        this.setName('DarkRoast');
        this.setPrices(0.7, 1.2, 1.8);
    }
}