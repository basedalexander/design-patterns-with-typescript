import { Pizza } from './pizza';
import { NYPizza } from './ny-pizza';
import { LAPizza } from './la-pizza';

export enum PizzaKind {
    NY,
    LA
}

// The simplies way to demonstrate
// Also used without instantiation, also know as static factory
export class SimplePizzaFactory {
      public create(type: PizzaKind): Pizza {
        if (type === PizzaKind.NY) {
            return new NYPizza();
        }
        if (type === PizzaKind.LA) {
            return new LAPizza();
        }
    }
}