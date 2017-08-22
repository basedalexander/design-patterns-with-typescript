import { Pizza } from '../../simple-factory/pizza';
import { IPizzaIngredientsFactory } from '../pizza-ingredients-factory';

export class LACheesePizza extends Pizza {
    constructor(private ingreadientsFactory: IPizzaIngredientsFactory) {
        super();
        this.name = 'LA Cheese Pizza';

        this.dough = this.ingreadientsFactory.createDough();
        this.sauce = this.ingreadientsFactory.createSauce();
        this.veggies = this.ingreadientsFactory.createVeggies();
        this.cheeze = this.ingreadientsFactory.createCheeze();
    }
}