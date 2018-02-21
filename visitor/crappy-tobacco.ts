import { IVisitable, IVisitor } from './interfaces';

export class CrappyTobacco implements IVisitable {
    private price: number = 3;
    getPrice(): number {
        return this.price;
    }

    accept(visitor: IVisitor): number {
        return visitor.visitTobacco(this);
    }
}