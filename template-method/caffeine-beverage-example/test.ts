import { CaffeineBeverage } from './caffeine-beverage';
import { CoffeeBeverage } from './coffee-beverage';
import { TeaBeverage } from './tea-beverage';

let coffee: CaffeineBeverage = new CoffeeBeverage();
coffee.prepare();

let tea: TeaBeverage = new TeaBeverage();
tea.prepare();