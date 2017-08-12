import { Beverage } from './beverage';

export abstract class CondimentDecorator extends Beverage {
    public beverage: Beverage;
    abstract getName(): string;
    abstract getPrice(): number;
}

export class Mocha extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
        this.name = "Mocha";
        this.price = 0.15;
    }

    public getName(): string {
        return `${this.beverage.getName()} + ${this.getName()}`;
    }
    public getPrice(): number {
        return this.beverage.getPrice() + this.price;
    }
}

export class Sugar extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
        this.name = "Sugar";
        this.price = 0.05;
    }

    public getName(): string {
        return `${this.beverage.getName()} + ${this.getName()}`;
    }
    public getPrice(): number {
        return this.beverage.getPrice() + this.price;
    }
}

export class Whip extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
        this.name = "Whip";
        this.price = 0.25;
    }

    public getName(): string {
        return `${this.beverage.getName()} + ${this.getName()}`;
    }
    public getPrice(): number {
        return this.beverage.getPrice() + this.price;
    }
}