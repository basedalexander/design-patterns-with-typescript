import { Approver } from './approver';
import { Director } from './director';
import { VisePresident } from './vise-president';
import { President } from './president';
import { IPurchase, Purchase } from './purchase';

let larry: Approver = new Director();
let tommy: Approver = new VisePresident();
let jack: Approver = new President();

larry.setSuccessor(tommy);
tommy.setSuccessor(jack);

const purchases: IPurchase[] = [
    new Purchase(1, 9000, 'Bananas'),
    new Purchase(2, 15000, 'Bananas'),
    new Purchase(3, 50000, 'Bananas'),
    new Purchase(4, 10000000, 'Bananas'),
];

purchases.forEach(purchase => larry.handle(purchase));