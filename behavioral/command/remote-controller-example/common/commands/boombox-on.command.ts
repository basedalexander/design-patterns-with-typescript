import { ICommand } from '../command.interface';
import { Boombox } from '../vendor-remote-devices/boombox';

export class BoomboxOnCommand implements ICommand {
    constructor(private boomBox: Boombox) {

    }

    public execute(): void {
        this.boomBox.on();
        this.boomBox.volumenUp();
        this.boomBox.volumenUp();
        this.boomBox.volumenUp();
    }

    public undo(): void {
        this.boomBox.off();
    }
}