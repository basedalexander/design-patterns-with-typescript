import { PizzaStore } from '../pizza-store';
import { PizzaType } from '../../simple-factory/pizza-type';
import { Pizza } from '../../simple-factory/pizza';
import { CheesePizza } from '../../simple-factory/cheese-pizza';
import { LaPizzaIngredientsFactory } from './la-pizza-ingredients-factory';
import { VeggiePizza } from '../../simple-factory/veggie-pizza';

export class LAPizzaStore extends PizzaStore {
    public createPizza(type: PizzaType): Pizza {
        if (type === PizzaType.Cheese) {
            return new CheesePizza(new LaPizzaIngredientsFactory());
        }
        if (type === PizzaType.Veggie) {
            return new VeggiePizza(new LaPizzaIngredientsFactory());
        }
    }
}