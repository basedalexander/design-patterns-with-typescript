import { Duck } from './duck';
import { FlyWithNoWingsBehaviour } from './fly-behaviours';
import { SquickQuackBehaviour } from './quack-behaviours';

export class StupidDuck extends Duck {
    constructor() {
        super();
        this.setFlyBehaviour(new FlyWithNoWingsBehaviour());
        this.setQuackBehaviour(new SquickQuackBehaviour());
    }

    public display(): void {
        console.log('Displaying a stupid duck');
    }
}