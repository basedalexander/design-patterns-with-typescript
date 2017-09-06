
import { SugarCondiment, WhipCondiment } from './condiments';
import { Americano } from './coffee-drinks';
import { Beverage, ProductSize } from './beverage';

let americano: Beverage = new Americano();
americano.getName();
americano.getPrice();

let americanoWithSugar: Beverage = new SugarCondiment(new Americano());
americanoWithSugar.getName();
americanoWithSugar.getPrice();

let americanoLarge: Beverage = new Americano();
americanoLarge.setSize(ProductSize.Large);
let americanoLargeWithWhipAndSugar: Beverage = new SugarCondiment(new WhipCondiment(americanoLarge));
americanoLargeWithWhipAndSugar.getName();
americanoLargeWithWhipAndSugar.getPrice();


