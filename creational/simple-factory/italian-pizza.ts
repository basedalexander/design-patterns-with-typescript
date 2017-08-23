import { Pizza } from './pizza';
import { IPizzaIngredientsFactory } from '../factory-method/pizza-ingredients-factory';

export class ItalianPizza extends Pizza {
    constructor(private pizzaIngredientsFactory: IPizzaIngredientsFactory) {
        super();
        this.name = 'Italian Pizza';
        this.getIngredients();
    }
}