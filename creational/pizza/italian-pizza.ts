import { Pizza } from './pizza';
import { IPizzaIngredientsFactory } from '../abstract-factory/pizza-ingredients-factory.interface';

export class ItalianPizza extends Pizza {
    constructor(private pizzaIngredientsFactory: IPizzaIngredientsFactory) {
        super();
        this.name = 'Italian Pizza';
        this.getIngredients();
    }
}