import { PizzaStore } from '../pizza-store';
import { PizzaType } from '../../simple-factory/pizza-type';
import { Pizza } from '../../simple-factory/pizza';
import { LACheesePizza } from './la-cheese-pizza';
import { LAVeggiePizza } from './la-veggie-pizza';

export class LAPizzaStore extends PizzaStore {
    public createPizza(type: PizzaType): Pizza {
        if (type === PizzaType.Cheese) {
            return new LACheesePizza();
        }
        if (type === PizzaType.Veggie) {
            return new LAVeggiePizza();
        }
    }
}