import { IVisitable, IVisitor } from './interfaces';

export class Wine implements IVisitable {
    private price: number = 5;
    getPrice(): number {
        return this.price;
    }

    accept(visitor: IVisitor): number {
        return visitor.visitDrink(this);
    }
}