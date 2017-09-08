import { CaffeineBeverageWithHook } from './caffeine-beverage-with-hook';

export class TeaBeverageWithHook extends CaffeineBeverageWithHook {
    public brew(): void {
        console.log('Steeping bag of tea');
    }

    public addCondiments(): void {
        console.log('Adding piece Lemon');
    }

    public customerWantsCondiments(): boolean {
        return this.askPermission();
    }

    private askPermission(): boolean {
        return confirm('Would you like to have condiments in your tea?');
    }
}