import { IState } from '../state.interface';
import { GumballMachine } from '../gumball-machine';

export class SoldState implements IState {
    constructor(private gumballMachine: GumballMachine) {}

    public insertQuarter(): void {
        console.warn(`Can't accept your quarter, we're giving you the ball you paid for`);
    }

    public ejectQuarter(): void {
        console.warn(`we're giving you the ball you paid for`);
    }

    public turnCrank(): void {
        console.warn(`we're giving you the ball you paid for`);
    }

    public dispense(): void {
        this.gumballMachine.releaseBall();

        if (this.gumballMachine.getCount() > 0) {
            this.gumballMachine.setState(this.gumballMachine.getNoQuorterState());
        } else {
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        }
    }
}