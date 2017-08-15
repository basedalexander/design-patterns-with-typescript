import { Beverage } from './beverage';

export abstract class CondimentDecorator extends Beverage {
    public beverage: Beverage;
    abstract getName(): string;
    abstract getPrice(): number;
}

export class MochaCondiment extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
        this.setSize(this.beverage.getSize());
        this.setName('MochaCondiment');
        this.setPrices(0.2, 0.5, 0.7);
    }

    public getName(): string {
        return `${this.beverage.getName()} + ${this.getName()}`;
    }
    public getPrice(): number {
        return this.beverage.getPrice() + this.getPriceBySize();
    }
}

export class SugarCondiment extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
        this.setSize(this.beverage.getSize());
        this.setName('SugarCondiment');
        this.setPrices(0.2, 0.5, 0.7);
    }

    public getName(): string {
        return `${this.beverage.getName()} + ${this.getName()}`;
    }
    public getPrice(): number {
        return this.beverage.getPrice() + this.getPriceBySize();
    }
}

export class WhipCondiment extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
        this.setSize(this.beverage.getSize());
        this.setName('WhipCondiment');
        this.setPrices(0.2, 0.5, 0.7);
    }

    public getName(): string {
        return `${this.beverage.getName()} + ${this.getName()}`;
    }
    public getPrice(): number {
        return this.beverage.getPrice() + this.getPriceBySize();
    }
}