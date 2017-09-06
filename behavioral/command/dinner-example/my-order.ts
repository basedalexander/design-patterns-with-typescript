import { IOrder } from './order';
import { ShortOrderCook } from './short-order-cook';

export class MyOrder implements IOrder {
    private cook: ShortOrderCook;

    constructor() {
        this.cook = new ShortOrderCook();
    }

    public orderUp(): void {
        this.cook.cookCoffee();
        this.cook.cookSandwich();
    }
}