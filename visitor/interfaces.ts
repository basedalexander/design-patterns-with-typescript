export interface IVisitable {
    getPrice(): number;
    accept(visitor: IVisitor): number;
}

export interface IVisitor {
    visitDrink(visitable: IVisitable): number;
    visitMeal(visitable: IVisitable): number;
    visitTobacco(visitable: IVisitable): number;
}