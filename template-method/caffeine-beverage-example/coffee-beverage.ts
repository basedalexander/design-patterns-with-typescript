import { CaffeineBeverage } from './caffeine-beverage';

export class CoffeeBeverage extends CaffeineBeverage {
    public brew(): void {
        console.log('Brewing coffee');
    }

    public addCondiments(): void {
        console.log('Adding milk and sugar');
    }
}