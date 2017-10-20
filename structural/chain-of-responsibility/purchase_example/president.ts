import { Approver } from './approver';
import { IPurchase } from './purchase';

export class President extends Approver {

    public handle(purchase: IPurchase): void {
        if (purchase.amount <= 10000000) {
            console.log(`${President['name']} handles purchase ${purchase.number}`);
        } else {
            console.log(`Purchase ${purchase.number} requires executive meeting`);
        }
    }
}