import { IState } from '../state.interface';
import { GumballMachine } from '../gumball-machine';

export class HasQuarterState implements IState {
    constructor(private gumballMachine: GumballMachine) {}

    public insertQuarter(): void {
        console.warn('The quorter has already been inserted');
    }

    public ejectQuarter(): void {
        console.log('Quorter returned');
        this.gumballMachine.setState(this.gumballMachine.getNoQuorterState());
    }

    public turnCrank(): void {
        this.gumballMachine.setState(this.gumballMachine.getSoldState());
    }

    public dispense(): void {

    }
}