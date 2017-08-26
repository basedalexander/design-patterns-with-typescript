import { ICommand } from '../command.interface';
import { CeilingFan } from '../vendor-remote-devices/ceiling-fan';

export class CeilingFanHighCommand implements ICommand {
    private previousSpeed: number;

    constructor(private ceilingFan: CeilingFan) {}

    public execute(): void {
        this.previousSpeed = this.ceilingFan.getSpeed();
        this.ceilingFan.high();
    }

    private undo(): void {
        this.ceilingFan.setSpeed(this.previousSpeed);
    }
}