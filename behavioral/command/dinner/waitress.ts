import { IOrder } from './order';

export class Waitress {
    private currentOrder: IOrder;

    private deliverOrderBack(): void {
        // delivers back to the client
    }

    public takeOrder(order: IOrder): void {
        this.currentOrder = order;
        this.haveOrderCooked();
    }

    public haveOrderCooked(): void {
        this.currentOrder.orderUp();
        this.deliverOrderBack();
        this.currentOrder = null;
    }
}