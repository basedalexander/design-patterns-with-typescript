import { PizzaStore } from '../pizza-store';
import { PizzaType } from '../../simple-factory/pizza/pizza-type';
import { Pizza } from '../../simple-factory/pizza/pizza';
import { NYPizzaIngredientsFactory } from '../../abstract-factory/ny-pizza-ingredients-factory';
import { CheesePizza } from '../../simple-factory/pizza/cheese-pizza';
import { VeggiePizza } from '../../simple-factory/pizza/veggie-pizza';

export class NYPizzaStore extends PizzaStore {
    constructor() {
        super();

        this.ingredientsFactory = new NYPizzaIngredientsFactory();
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