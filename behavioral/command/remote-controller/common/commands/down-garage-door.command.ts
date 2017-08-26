import { ICommand } from '../command.interface';
import { Garage } from '../vendor-remote-devices/garage';

export class DownGarageDoorCommand implements ICommand {
    constructor(private garage: Garage) {
    }

    public execute(): void {
        this.garage.downDoor();
    }

    public undo(): void {
        this.garage.upDoor();
    }
}