import { PizzaKind, SimplePizzaFactory } from './simple-pizza-factory';
import { Pizza } from './pizza';

export class PizzaStore {
    constructor(private pizzaFactory: SimplePizzaFactory) {

    }

    public orderPizza(type: PizzaKind): Pizza {
        let pizza: Pizza = this.pizzaFactory.create(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }
}