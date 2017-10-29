export abstract class CaffeineBeverageWithHook {
    public protected prepare(): void {
        this.boilWater();
        this.brew();
        this.pourIntoCup();

        if (this.customerWantsCondiments()) {
            this.addCondiments();
        }
    }

    public protected boilWater(): void {
        console.log('Boiling water');
    }

    public protected pourIntoCup(): void {
        console.log('Pouring into the cup');
    }

    public customerWantsCondiments(): boolean {
        return true;
    }

    public abstract brew(): void;

    public abstract addCondiments(): void;
}