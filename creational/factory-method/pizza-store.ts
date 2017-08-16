import { PizzaType } from '../simple-factory/pizza-type';
import { Pizza } from '../simple-factory/pizza';

export abstract class PizzaStore {
    public orderPizza(type: PizzaType): Pizza {
        return this.createPizza(type);
    }

    // can be implemented by default
    abstract createPizza(type: PizzaType): Pizza;
}