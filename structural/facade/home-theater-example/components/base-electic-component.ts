import { IElectricComponent } from './switchable.interface';

export class BaseElecticComponent implements IElectricComponent {
    public turnOn(): void {
        return;
    }

    public turnOff(): void {
        return;
    }
}