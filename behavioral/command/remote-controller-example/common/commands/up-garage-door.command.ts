import { ICommand } from '../command.interface';
import { Garage } from '../vendor-remote-devices/garage';

export class UpGarageDoorCommand implements ICommand {
    constructor(private garage: Garage) {

    }

    public execute(): void {
        this.garage.upDoor();
    }

    public undo(): void {
        this.garage.downDoor();
    }
}