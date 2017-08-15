import { PizzaStore } from '../pizza-store';
import { PizzaType } from '../../simple-factory/pizza-type';
import { Pizza } from '../../simple-factory/pizza';
import { NYCheesePizza } from './ny-cheese-pizza';
import { NYVeggiePizza } from './la-veggie-pizza';

export class NYPizzaStore extends PizzaStore {
    public createPizza(type: PizzaType): Pizza {
        if (type === PizzaType.Cheese) {
            return new NYCheesePizza();
        }
        if (type === PizzaType.Veggie) {
            return new NYVeggiePizza();
        }
    }
}