import { NYPizzaStore } from './ny-pizza-store/ny-pizza-store';
import { PizzaStore } from './pizza-store';
import { LAPizzaStore } from './la-pizza-store/la-pizza-store';
import { PizzaType } from '../pizza-type';

let nyPizzaStore: PizzaStore = new NYPizzaStore();
let laPizzaStore: PizzaStore = new LAPizzaStore();

nyPizzaStore.orderPizza(PizzaType.Cheese);
laPizzaStore.orderPizza(PizzaType.Cheese);