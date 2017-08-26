import { ICommand } from './command.interface';

export interface ISimpleController {
    setSlot(command: ICommand): void;
    pressButton(): void;
}