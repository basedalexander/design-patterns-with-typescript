import { IState } from '../state.interface';
import { GumballMachine } from '../gumball-machine';

export class NoQuarterState implements IState {

    constructor(private gumballMachine: GumballMachine) {}

    public insertQuarter(): void {
        this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
    }

    public ejectQuarter(): void {
        console.warn(`There's no coin to inject`);
    }

    public turnCrank(): void {
        console.warn(`The was no coin provided`);
    }

    public dispense(): void {
        console.warn(`The quarter hasn't been provided`);
    }

    public refill(): void {
        // do nothing;
    }
}