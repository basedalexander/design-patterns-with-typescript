import { IDuck } from './duck';
import { ITurkey } from './turkey';

export class TurkeyAdapter implements IDuck {
    constructor(private turkey: ITurkey) {
    }

    public quack(): void {
        this.turkey.gooble();
    }

    public fly(): void {
        this.turkey.fly();
    }
}