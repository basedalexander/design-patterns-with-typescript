import { Pizza } from '../pizza';
import { VeggiePizza } from './veggie-pizza';
import { CheesePizza } from './cheese-pizza';
import { PizzaType } from '../pizza-type';

// The simplies way to demonstrate
// Also used without instantiation, also know as static factory
export class SimplePizzaFactory {
      public create(type: PizzaType): Pizza {
        if (type === PizzaType.Veggie) {
            return new VeggiePizza();
        }
        if (type === PizzaType.Cheese) {
            return new CheesePizza();
        }
    }
}