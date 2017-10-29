import { Pizza } from './pizza';
import { IPizzaIngredientsFactory } from '../../abstract-factory/pizza-ingredients-factory.interface';

export class CheesePizza extends Pizza {
    constructor(private pizzaIngredientsFactory: IPizzaIngredientsFactory) {
        super();
        this.name = 'Cheese Pizza';
        this.getIngredients();
    }
}