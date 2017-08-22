import { IPizzaIngredientsFactory } from '../pizza-ingredients-factory';
import { ThickDough } from '../pizza-ingredients/thick-dough';
import { Sauce1 } from '../pizza-ingredients/sauce1';
import { Cheeze1 } from '../pizza-ingredients/cheeze1';

export class LaPizzaIngredientsFactory implements IPizzaIngredientsFactory {
    public createDough(): any { return new ThickDough(); }
    public createSauce(): any { return new Sauce1(); }
    public createVeggies(): any[] { return []; }
    public createCheeze(): any { return new Cheeze1(); }
}