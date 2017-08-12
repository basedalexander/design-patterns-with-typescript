import { Beverage, IBeverage } from './beverage';

export class Americano extends Beverage implements IBeverage {
    constructor() {
        super();
        this.setName('Americano');
        this.setDescription('One of the most popular coffee drinks');
        this.setPrice(0.85);
    }
}

export class DarkRoast extends Beverage implements IBeverage {
    constructor() {
        super();
        this.setName('DarkRoast');
        this.setDescription('Strong coffee');
        this.setPrice(1);
    }
}