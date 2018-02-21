import { ProductTaxVisitor } from './product-tax-visitor';
import { TaxCounter } from './tax-counter';
import { CrappyTobacco } from './crappy-tobacco';
import { Dinner } from './dinner';
import { Wine } from './wine';
import { IVisitable } from './interfaces';

const taxVisitor = new ProductTaxVisitor();
const taxCounter = new TaxCounter(taxVisitor);

const products: IVisitable[] = [
    new CrappyTobacco(),
    new Dinner(),
    new Wine()
];

const taxesToPay: number = taxCounter.count(products);