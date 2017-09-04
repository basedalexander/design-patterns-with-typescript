import { ITurkey, Turkey } from './turkey';
import { Duck, IDuck } from './duck';
import { TurkeyAdapter } from './turkey-adapter';
import { DuckAdapter } from './duck-adapter';

let turkey: ITurkey = new Turkey();
let turkeyAdapter: IDuck = new TurkeyAdapter(turkey);

turkeyAdapter.quack();
turkeyAdapter.fly();

let duck = new Duck();
let duckAdapter: ITurkey = new DuckAdapter(duck);

duckAdapter.gooble();
duckAdapter.fly();