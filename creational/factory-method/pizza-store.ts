import { PizzaType } from '../pizza-type';
import { Pizza } from '../pizza';

export abstract class PizzaStore {
    public orderPizza(type: PizzaType): Pizza {
        return this.createPizza(type);
    }

    abstract createPizza(type: PizzaType): Pizza;
}