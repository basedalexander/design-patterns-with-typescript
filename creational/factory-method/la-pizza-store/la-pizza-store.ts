import { PizzaStore } from '../pizza-store';
import { PizzaType } from '../../pizza/pizza-type';
import { Pizza } from '../../pizza/pizza';
import { CheesePizza } from '../../pizza/cheese-pizza';
import { LaPizzaIngredientsFactory } from '../../abstract-factory/la-pizza-ingredients-factory';
import { VeggiePizza } from '../../pizza/veggie-pizza';

export class LAPizzaStore extends PizzaStore {

    constructor() {
        super();
        this.ingredientsFactory = new LaPizzaIngredientsFactory();
    }

    public createPizza(type: PizzaType): Pizza {
        if (type === PizzaType.Cheese) {
            return new CheesePizza(this.ingredientsFactory);
        }
        if (type === PizzaType.Veggie) {
            return new VeggiePizza(this.ingredientsFactory);
        }
    }
}