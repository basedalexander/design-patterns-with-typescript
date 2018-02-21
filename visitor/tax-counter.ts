import { IVisitable, IVisitor } from './interfaces';

export class TaxCounter {
    constructor(private productTaxVisitor: IVisitor) {
    }

    count(products: IVisitable[]): number {
        let result: number = 0;

        products.forEach(product => {
            result += product.accept(this.productTaxVisitor);
        });

        return result;
    }
}