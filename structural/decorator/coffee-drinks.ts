import { Beverage, IBeverage } from './beverage';

export class Americano extends Beverage {
    constructor() {
        super();
        this.name = "Americano";
        this.price = 0.85;
    }
}

export class DarkRoast extends Beverage {
    constructor() {
        super();
        this.name = "DarkRoast";
        this.price = 1.85;
    }
}