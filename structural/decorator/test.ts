
import { Beverage, IBeverage } from './beverage';
import { Sugar } from './condiments';
import { Americano } from './coffee-drinks';

// A client orders Americano
let americano: Beverage = new Americano();
americano.getName(); // Americano
americano.getPrice(); // $0.85

// A client orders Americano + Sugar
let americanoWithSugar: Beverage = new Sugar(new Americano());
americanoWithSugar.getName(); // Americano + Sugar
americanoWithSugar.getPrice(); // $0.90