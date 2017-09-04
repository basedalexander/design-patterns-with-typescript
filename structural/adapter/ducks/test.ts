import { ITurkey, Turkey } from './turkey';
import { IDuck } from './duck';
import { TurkeyAdapter } from './turkey-adapter';

let turkey: ITurkey = new Turkey();
let turkeyAdapter: IDuck = new TurkeyAdapter(turkey);

turkeyAdapter.quack();
turkeyAdapter.fly();