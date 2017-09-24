import { IState } from '../state.interface';
import { GumballMachine } from '../gumball-machine';
import { ChanceGenerator } from '../chance-generator';

export class HasQuarterState implements IState {
    private chanceGenerator: ChanceGenerator = new ChanceGenerator();
    private winnerChancePercentage: number = 10;

    constructor(private gumballMachine: GumballMachine) {
    }

    public insertQuarter(): void {
        console.warn('The quorter has already been inserted');
    }

    public ejectQuarter(): void {
        console.log('Quorter returned');
        this.gumballMachine.setState(this.gumballMachine.getNoQuorterState());
    }

    public turnCrank(): void {
        const winner: boolean = this.chanceGenerator.getChanceOfPercent(this.winnerChancePercentage);

        if (winner) {
            this.gumballMachine.setState(this.gumballMachine.getWinnerState());
        }

        this.gumballMachine.setState(this.gumballMachine.getSoldState());
    }

    public dispense(): void {
        console.warn('Nope');
    }

    public refill(): void {
        // do nothing;
    }
}