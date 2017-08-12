import { Beverage, IBeverage } from './beverage';

export class Mocha extends Beverage implements IBeverage {
    constructor(beverage: IBeverage) {
        super(beverage);

        this.setName('Mocha');
        this.setDescription('Mocha is a perfect condiment for coffee');
        this.setPrice(0.25);
    }
}

export class Sugar extends Beverage implements IBeverage {
    constructor(beverage: IBeverage) {
        super(beverage);

        this.setName('Sugar');
        this.setDescription('Makes your beverage sweet');
        this.setPrice(0.05);
    }
}


export class Whip extends Beverage implements IBeverage {
    constructor(beverage: IBeverage) {
        super(beverage);

        this.setName('Whip');
        this.setDescription('I <3 that');
        this.setPrice(0.05);
    }
}