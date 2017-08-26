import { Pizza } from './pizza';
import { IPizzaIngredientsFactory } from '../abstract-factory/pizza-ingredients-factory.interface';

export class VeggiePizza extends Pizza {
    constructor(private pizzaIngredientsFactory: IPizzaIngredientsFactory) {
        super();
        this.name = 'Veggie Pizza';
        this.getIngredients();
    }
}