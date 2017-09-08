import { CaffeineBeverageWithHook } from './caffeine-beverage-with-hook';
import { CaffeineBeverage } from '../caffeine-beverage-example/caffeine-beverage';

export class CoffeeBeverageWithHook extends CaffeineBeverageWithHook {
    public brew(): void {
        console.log('Brewing coffee');
    }

    public addCondiments(): void {
        console.log('Adding milk and sugar');
    }

    public customerWantsCondiments(): boolean {
        return true;
    }
}