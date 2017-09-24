import { IState } from '../state.interface';
import { GumballMachine } from '../gumball-machine';

export class SoldOutState implements IState {
    constructor(private gumballMachine: GumballMachine) {}

    public insertQuarter(): void {
        console.warn(`Can't accept your quarter, there's no balls in the machine`);
    }

    public ejectQuarter(): void {
        console.warn(`The machine is empty`);
    }

    public turnCrank(): void {
        console.warn(`The machine is empty`);
    }

    public dispense(): void {
        console.warn(`The machine is empty`);
    }
}