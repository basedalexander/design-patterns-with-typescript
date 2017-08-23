import { IPizzaIngredientsFactory } from '../factory-method/pizza-ingredients-factory';

export abstract class Pizza {
    name: string;
    dough: any;
    cheese: any;
    sauce: any;
    veggies: any[];

    pizzaIngredientsFactory: IPizzaIngredientsFactory;

    getIngredients(): void {
        this.dough = this.pizzaIngredientsFactory.createDough();
        this.sauce = this.pizzaIngredientsFactory.createSauce();
        this.veggies = this.pizzaIngredientsFactory.createVeggies();
        this.cheese = this.pizzaIngredientsFactory.createCheese();
    }

    prepare(): void { }
    bake(): void { }
    cut(): void { }
    box(): void { }
}