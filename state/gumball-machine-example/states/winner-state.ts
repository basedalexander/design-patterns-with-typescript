import { IState } from '../state.interface';
import { GumballMachine } from '../gumball-machine';

export class WinnerState implements IState {
    constructor(private gumballMachine: GumballMachine) {}

    public insertQuarter(): void {
        console.error('Nope');
    }

    public ejectQuarter(): void {
        console.error('Nope');
    }

    public turnCrank(): void {
        console.error('Nope');
    }

    public dispense(): void {
        console.log(`You're winner, get 2 balls instead of 1`);

        this.gumballMachine.releaseBall();

        if (this.gumballMachine.getCount() === 0) {
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        } else {
            this.gumballMachine.releaseBall();

            if (this.gumballMachine.getCount() === 0) {
                this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
            } else {
                this.gumballMachine.setState(this.gumballMachine.getNoQuorterState());
            }
        }
    }
}