import { IState } from '../state.interface';
import { GumballMachine } from '../gumball-machine';

export class WinnerState implements IState {
    constructor(private gumballMachine: GumballMachine) {}

    public insertQuarter(): void {

    }

    public ejectQuarter(): void {

    }

    public turnCrank(): void {

    }

    public dispense(): void {

    }
}