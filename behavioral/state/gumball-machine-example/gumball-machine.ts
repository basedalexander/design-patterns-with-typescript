import { IState } from './state.interface';
import { HasQuarterState } from './states/has-quarter-state';
import { NoQuarterState } from './states/no-quarter-state';
import { SoldState } from './states/sold-state';
import { SoldOutState } from './states/sold-out-state';
import { WinnerState } from './states/winner-state';

export class GumballMachine {
    private soldOutState: IState;
    private noQuarterState: IState;
    private hasQuarterState: IState;
    private soldState: IState;
    private winnerState: IState;

    private state: IState;
    private count: number;

    constructor() {
        this.soldOutState = new SoldOutState(this);
        this.noQuarterState = new NoQuarterState(this);
        this.hasQuarterState = new HasQuarterState(this);
        this.soldState = new SoldState(this);
        this.winnerState = new WinnerState(this);

        this.state = this.soldOutState;
        this.count = 0;
    }

    public insertQuarter(): void {
        this.state.insertQuarter();
    }
    public ejectQuarter(): void {
        this.state.ejectQuarter();
    }
    public turnCrank(): void {
        this.state.turnCrank();
        this.state.dispense();
    }
    public setState(state: IState): void {
        this.state = state;
    }
    public releaseBall(): void {
        if (this.count > 0) {
            this.count = this.count - 1;
        }
    }
    public refill(gumballsAmount: number): void {
        this.count = this.count + gumballsAmount;
        this.state.refill();
    }

    public getNoQuorterState(): IState {
        return this.noQuarterState;
    }
    public getHasQuarterState(): IState {
        return this.hasQuarterState;
    }
    public getSoldState(): IState {
        return this.soldState;
    }
    public getSoldOutState(): IState {
        return this.soldOutState;
    }
    public getWinnerState(): IState {
        return this.winnerState;
    }
    public getCount(): number {
        return this.count;
    }
}