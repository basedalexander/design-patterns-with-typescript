import { Duck } from './duck';
import { FlyWithWingsBehavour } from './fly-behaviours';
import { NormalQuackBehaviour } from './quack-behaviours';

export class NormalDuck extends Duck {
    constructor() {
        super();
        this.setFlyBehaviour(new FlyWithWingsBehavour());
        this.setQuackBehaviour(new NormalQuackBehaviour());
    }

    public display(): void {
        console.log('Displaying a regular duck');
    }
}