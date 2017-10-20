import { IPurchase, Purchase } from './purchase';

export abstract class Approver {
    successor: Approver;

    public setSuccessor(sucessor: Approver): void {
        this.successor = sucessor;
    }

    public abstract handle(purchase: IPurchase): void;
}