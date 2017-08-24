import { PizzaStore } from '../pizza-store';
import { PizzaType } from '../../simple-factory/pizza-type';
import { Pizza } from '../../simple-factory/pizza';
import { CheesePizza } from '../../simple-factory/cheese-pizza';
import { LaPizzaIngredientsFactory } from '../../abstract-factory/la-pizza-ingredients-factory';
import { VeggiePizza } from '../../simple-factory/veggie-pizza';
import { IPizzaIngredientsFactory } from '../../abstract-factory/pizza-ingredients-factory.interface';

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