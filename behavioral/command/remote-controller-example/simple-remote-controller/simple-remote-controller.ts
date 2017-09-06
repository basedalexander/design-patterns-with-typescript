import { ICommand } from '../common/command.interface';
import { ISimpleController } from './simple-controller.interface';

export class SimpleRemoteController implements ISimpleController {
    private slot: ICommand;

    public setSlot(command: ICommand): void {
        this.slot = command;
    }

    public pressButton(): void {
        this.slot.execute();
    }
}