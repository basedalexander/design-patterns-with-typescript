import { Pizza } from './pizza/pizza';
import { VeggiePizza } from './pizza/veggie-pizza';
import { CheesePizza } from './pizza/cheese-pizza';
import { PizzaType } from './pizza/pizza-type';

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