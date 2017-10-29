export abstract class CaffeineBeverage {
     public protected prepare(): void {
        this.boilWater();
        this.brew();
        this.pourIntoCup();
        this.addCondiments();
    }

    public boilWater(): void {
        console.log('Boiling water');
    }

    public pourIntoCup(): void {
        console.log('Pouring into the cup');
    }

    public abstract brew(): void;

    public abstract addCondiments(): void;
}