
import { IBeverage } from './beverage';
import { Americano } from './drinks';
import { Sugar } from './condiments';

// A client orders Americano
let americano: IBeverage = new Americano();
americano.getName(); // Americano
americano.getPrice(); // $0.85

// A client orders Americano + Sugar
let americanoWithSugar: IBeverage = new Sugar(new Americano());
americanoWithSugar.getName(); // Americano + Sugar
americanoWithSugar.getPrice(); // $0.90