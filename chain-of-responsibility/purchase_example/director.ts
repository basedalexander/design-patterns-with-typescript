import { Approver } from './approver';
import { IPurchase } from './purchase';

export class Director extends Approver {

    public handle(purchase: IPurchase): void {
        if (purchase.amount <= 10000) {
            console.log(`${Director['name']} handles purchase ${purchase.number}`);
        } else {
            if (this.successor) {
                this.successor.handle(purchase);
            }
        }
    }
}