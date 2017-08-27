import { ICommand } from '../command.interface';

export class MacroCommand implements ICommand {
    constructor(private commands: ICommand[]) {

    }

    public execute(): void {
        this.commands.forEach(c => c.execute());
    }

    public undo(): void {
        this.commands.forEach(c => c.undo());
    }
}