
import { Beverage, ProductSize } from './beverage';
import { Sugar, Whip } from './condiments';
import { Americano } from './coffee-drinks';

let americano: Beverage = new Americano();
americano.getName();
americano.getPrice();

let americanoWithSugar: Beverage = new Sugar(new Americano());
americanoWithSugar.getName();
americanoWithSugar.getPrice();

let americanoLarge: Beverage = new Americano();
americanoLarge.setSize(ProductSize.Large);
let americanoLargeWithWhipAndSugar: Beverage = new Sugar(new Whip(americanoLarge));
americanoLargeWithWhipAndSugar.getName();
americanoLargeWithWhipAndSugar.getPrice();


