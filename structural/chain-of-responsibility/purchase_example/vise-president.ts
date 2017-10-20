import { Approver } from './approver';
import { IPurchase } from './purchase';

export class VisePresident extends Approver {

    public handle(purchase: IPurchase): void {
        if (purchase.amount <= 100000) {
            console.log(`${VisePresident['name']} handles purchase ${purchase.number}`);
        } else {
            if (this.successor) {
                this.successor.handle(purchase);
            }
        }
    }
}