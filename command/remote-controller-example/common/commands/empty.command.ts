import { ICommand } from '../command.interface';

export class EmptyCommand implements ICommand {
    public execute(): void {
        return;
    }

    public undo(): void {
        return;
    }
}