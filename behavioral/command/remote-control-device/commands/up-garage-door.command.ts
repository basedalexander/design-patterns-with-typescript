import { ICommand } from '../command.interface';
import { Garage } from '../vendor-remote-devices/garage';

export class UpGarageDoorCommand implements ICommand {
    constructor(private garage: Garage) {

    }

    execute(): void {
        this.garage.upDoor();
    }
}