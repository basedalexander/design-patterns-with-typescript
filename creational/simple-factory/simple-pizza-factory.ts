import { Pizza } from './pizza';
import { VeggiePizza } from './veggie-pizza';
import { CheesePizza } from './cheese-pizza';

export enum PizzaKind {
    Veggie,
    Cheese
}

// The simplies way to demonstrate
// Also used without instantiation, also know as static factory
export class SimplePizzaFactory {
      public create(type: PizzaKind): Pizza {
        if (type === PizzaKind.Veggie) {
            return new VeggiePizza();
        }
        if (type === PizzaKind.Cheese) {
            return new CheesePizza();
        }
    }
}