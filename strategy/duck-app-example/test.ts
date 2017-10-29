import { StupidDuck } from './stupid-duck';
import { NormalDuck } from './normal-duck';
import { FlyWithWingsBehavour } from './fly-behaviours';
import { SilentQuackBehaviour } from './quack-behaviours';

let stupidDuck = new StupidDuck();
let duck = new NormalDuck();

stupidDuck.performFly(); // Can't fly
stupidDuck.setFlyBehaviour(new FlyWithWingsBehavour());
stupidDuck.performFly(); // Not it can fly

duck.performQuack();    // Normal quack
duck.setQuackBehaviour(new SilentQuackBehaviour());
duck.performQuack();    // No sound