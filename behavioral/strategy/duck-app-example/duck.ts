import { IFlyBehaviour, IQuackBehaviour } from './interfaces';

/*
    - each Duck has its own appearence, each should implement method display().
    - but quaking and flying can be changed very often, this is why those actions have been encapsulated to their own classes.
    - Using Duck as a base class don't violate program to interface principle, since interface is the same as supertype, as is an abstract class.
* */

export abstract class Duck {
    private flyBehaviour: IFlyBehaviour;
    private quackBehaviour: IQuackBehaviour;

    public performQuack(): void {
        this.quackBehaviour.quack();
    }
    public performFly(): void {
        this.flyBehaviour.fly();
    }

    public setFlyBehaviour(b: IFlyBehaviour): void {
        this.flyBehaviour = b;
    }
    public setQuackBehaviour(b: IQuackBehaviour): void {
        this.quackBehaviour = b;
    }

    public swim(): void {
        console.log('swimming...');
    }

    public abstract display(): void;
}