import { Pizza } from './pizza';
import { IPizzaIngredientsFactory } from '../factory-method/pizza-ingredients-factory';

export class CheesePizza extends Pizza {
    constructor(private pizzaIngredientsFactory: IPizzaIngredientsFactory) {
        super();
        this.name = 'Cheese Pizza';
        this.getIngredients();
    }
}