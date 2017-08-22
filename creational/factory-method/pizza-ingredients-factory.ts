export interface IPizzaIngredientsFactory {
    createDough(): any;
    createSauce(): any;
    createVeggies(): any[];
    createCheeze(): any;
}