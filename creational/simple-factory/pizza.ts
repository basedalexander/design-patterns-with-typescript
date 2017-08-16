export abstract class Pizza {
    name: string;
    dough: string;
    sauce: string;
    toppings: string[] = [];

    prepare(): void { }
    bake(): void { }
    cut(): void { }
    box(): void { }
}