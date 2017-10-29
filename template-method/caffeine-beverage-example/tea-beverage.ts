import { CaffeineBeverage } from './caffeine-beverage';

export class TeaBeverage extends CaffeineBeverage {
    public brew(): void {
        console.log('Steeping bag of tea');
    }

    public addCondiments(): void {
        console.log('Adding piece Lemon');
    }
}