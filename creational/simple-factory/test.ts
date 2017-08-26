import { PizzaStore } from './pizza-store';
import { SimplePizzaFactory } from './simple-pizza-factory';
import { PizzaType } from '../pizza/pizza-type';

let pizzaFacotory = new SimplePizzaFactory();
let pizzaStore: PizzaStore = new PizzaStore(pizzaFacotory);

pizzaStore.orderPizza(PizzaType.Veggie);
pizzaStore.orderPizza(PizzaType.Cheese);