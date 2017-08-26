import { Light } from '../vendor-remote-devices/light';
import { ICommand } from '../command.interface';

export class LightOnCommand implements ICommand {
    constructor(private light: Light) {
    }

    public execute(): void {
        this.light.on();
    }
}