import { IVisitable, IVisitor } from './interfaces';

export class ProductTaxVisitor implements IVisitor {
    visitDrink(visitable: IVisitable): number {
        return visitable.getPrice() * 0.35;
    }

    visitMeal(visitable: IVisitable): number {
        return visitable.getPrice() * 0.67;
    }

    visitTobacco(visitable: IVisitable): number {
        return visitable.getPrice() * 0.3;
    }
}