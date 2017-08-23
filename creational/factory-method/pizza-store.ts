import { PizzaType } from '../simple-factory/pizza-type';
import { Pizza } from '../simple-factory/pizza';
import { IPizzaIngredientsFactory } from './pizza-ingredients-factory';

export abstract class PizzaStore {
    ingredientsFactory: IPizzaIngredientsFactory;

    public orderPizza(type: PizzaType): Pizza {
        return this.createPizza(type);
    }

    // can be implemented by default
    abstract createPizza(type: PizzaType): Pizza;
}