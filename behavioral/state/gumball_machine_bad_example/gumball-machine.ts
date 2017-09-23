export class GumballMachine {
    private state: number;
    private ballsCount: number = 0;

    private SOLD_OUT: number = 0;
    private NO_QUARTER: number = 1;
    private HAS_QUARTER: number = 2;
    private SOLD: number = 3;

    constructor() {
        this.state = this.SOLD_OUT;
    }

    public putBallsIn(amount: number): void {
        this.ballsCount = amount;

        if (amount > 0) {
            this.state = this.NO_QUARTER;
        }
    }

    public insertQuarter(): void {
        if (this.state === this.SOLD_OUT) {
            // do stuff
        } else if (this.state === this.HAS_QUARTER) {
            // do stuff
        } else if (this.state === this.SOLD) {
            // do stuff
        } else if (this.state === this.NO_QUARTER) {
            this.state = this.HAS_QUARTER;
        }
    }

    public turnCrank(): void {
        if (this.state === this.HAS_QUARTER) {
            this.state = this.SOLD;
            this.displense();
        } else if (this.state === this.NO_QUARTER) {
            // action is not available
        } else if (this.state = this.SOLD) {
            // the machine is already giving a ball to the user
        } else if (this.state = this.SOLD_OUT) {
            // there's no balls in the machine
        }
    }

    public ejectQuarter(): void {
        if (this.state === this.HAS_QUARTER) {
            this.state = this.NO_QUARTER;
            // return quarter to the user
        } else if (this.state === this.NO_QUARTER) {
            // there's no quarter to return
        } else if (this.state = this.SOLD_OUT) {
            // nope
        } else if (this.state = this.SOLD) {
            // nope
        }
    }

    private displense(): void {
        if (this.state === this.SOLD) {
            // give a ball to the customer
        }
    }
}