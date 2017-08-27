import { ICommand } from '../command.interface';
import { Light } from '../vendor-remote-devices/light';

export class LightDimCommand implements ICommand {
    private previousLightState;

    constructor(private light: Light) {
    }

    public execute(): void {
        this.previousLightState = this.light.getState();
        this.light.dim();
    }

    public undo(): void {
        this.light.setState(this.previousLightState);
    }
}