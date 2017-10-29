import { Me } from './me';
import { Waitress } from './waitress';
import { IOrder } from './order';

let me = new Me();
let waitress = new Waitress();

let myOrder: IOrder = me.createOrder();

waitress.takeOrder(myOrder);