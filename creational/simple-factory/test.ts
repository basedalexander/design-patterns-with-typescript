import { PizzaStore } from './pizza-store';
import { PizzaKind, SimplePizzaFactory } from './simple-pizza-factory';

let pizzaFacotory = new SimplePizzaFactory();
let pizzaStore: PizzaStore = new PizzaStore(pizzaFacotory);

pizzaStore.orderPizza(PizzaKind.LA);
pizzaStore.orderPizza(PizzaKind.NY);