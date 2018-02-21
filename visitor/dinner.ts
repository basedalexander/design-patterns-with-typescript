import { IVisitable, IVisitor } from './interfaces';

export class Dinner implements IVisitable {
    private price: number = 25;
    getPrice(): number {
        return this.price;
    }

    accept(visitor: IVisitor): number {
        return visitor.visitMeal(this);
    }
}