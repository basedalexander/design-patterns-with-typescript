import { CaffeineBeverageWithHook } from './caffeine-beverage-with-hook';
import { CoffeeBeverageWithHook } from './coffee-beverage-with-hook';
import { TeaBeverageWithHook } from './tea-beverage-with-hook';

let coffee: CaffeineBeverageWithHook = new CoffeeBeverageWithHook();
coffee.prepare();

let tea: CaffeineBeverageWithHook = new TeaBeverageWithHook();
tea.prepare();