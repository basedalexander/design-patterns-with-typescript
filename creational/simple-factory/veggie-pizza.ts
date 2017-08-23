import { Pizza } from './pizza';
import { IPizzaIngredientsFactory } from '../factory-method/pizza-ingredients-factory';

export class VeggiePizza extends Pizza {
    constructor(private pizzaIngredientsFactory: IPizzaIngredientsFactory) {
        super();
        this.name = 'Veggie Pizza';
        this.getIngredients();
    }
}