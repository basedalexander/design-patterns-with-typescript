import { Light } from '../vendor-remote-devices/light';
import { ICommand } from '../command.interface';

export class LightOffCommand implements ICommand {
    constructor(private light: Light) {
    }

    public execute(): void {
        this.light.off();
    }

    public undo(): void {
        this.light.on();
    }
}