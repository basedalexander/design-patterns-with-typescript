import { IObserver, ISubject } from './observable.interface';

export interface IWeatherData extends ISubject {
    notifyDataChanged(data: any): void;
}

export class WeatherData implements IWeatherData {
    private observers: IObserver[] = [];

    public notifyDataChanged(data: any): void {
        this.observers.forEach(o => o.update(data));
    }

    public subscribe(display: IObserver): void {
        this.observers.push(display);
    }

    public unsubscribe(display: IObserver): void {
        let index: number = this.observers.indexOf(display);
        this.observers.splice(index, 1);
    }
}