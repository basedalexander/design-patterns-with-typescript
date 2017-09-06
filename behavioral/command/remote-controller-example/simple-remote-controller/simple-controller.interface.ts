import { ICommand } from '../common/command.interface';

export interface ISimpleController {
    setSlot(command: ICommand): void;
    pressButton(): void;
}