import { IPizzaIngredientsFactory } from './pizza-ingredients-factory.interface';
import { Veggies2, Cheese1, Sauce1, ThickDough } from '../factory-method/pizza-ingredients/index';

export class LaPizzaIngredientsFactory implements IPizzaIngredientsFactory {
    public createDough(): any { return new ThickDough(); }
    public createSauce(): any { return new Sauce1(); }
    public createVeggies(): any[] { return <any>[]> new Veggies2(); }
    public createCheese(): any { return new Cheese1(); }
}