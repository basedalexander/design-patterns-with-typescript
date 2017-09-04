import { ITurkey } from './turkey';
import { IDuck } from './duck';

export class DuckAdapter implements ITurkey {
    constructor(private duck: IDuck) {

    }

    public gooble(): void {
        this.duck.quack();
        this.duck.quack();
    }

    public fly(): void {
        this.duck.fly();
        this.duck.quack();
    }
}