import { IOrder } from './order';
import { MyOrder } from './my-order';

export class Me {
    public createOrder(): IOrder {
        return new MyOrder();
    }
}