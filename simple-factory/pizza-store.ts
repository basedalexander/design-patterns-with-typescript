import { SimplePizzaFactory } from './simple-pizza-factory';
import { Pizza } from './pizza/pizza';
import { PizzaType } from './pizza/pizza-type';

export class PizzaStore {
    constructor(private pizzaFactory: SimplePizzaFactory) {

    }

    public orderPizza(type: PizzaType): Pizza {
        let pizza: Pizza = this.pizzaFactory.create(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }
}