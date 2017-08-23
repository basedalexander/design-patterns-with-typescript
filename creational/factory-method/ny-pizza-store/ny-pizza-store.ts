import { PizzaStore } from '../pizza-store';
import { PizzaType } from '../../simple-factory/pizza-type';
import { Pizza } from '../../simple-factory/pizza';
import { NYPizzaIngredientsFactory } from './ny-pizza-ingredients-factory';
import { CheesePizza } from '../../simple-factory/cheese-pizza';
import { VeggiePizza } from '../../simple-factory/veggie-pizza';

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