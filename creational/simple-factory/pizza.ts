export abstract class Pizza {
    name: string;
    dough: any;
    cheeze: any;
    sauce: any;
    veggies: any[];

    prepare(): void { }
    bake(): void { }
    cut(): void { }
    box(): void { }
}