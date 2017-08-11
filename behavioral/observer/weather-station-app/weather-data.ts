import { IObservable } from './observable.interface';
import { IWeatherDisplay } from './weather-displays';

export interface IWeatherData extends IObservable {
    notifyDataChanged(data: any): void;
}

export class WeatherData implements IWeatherData {
    private subscribers: IWeatherDisplay[] = [];

    public notifyDataChanged(data: any): void {
        this.subscribers.forEach(sub => sub.update(data));
    }

    public subscribe(display: IWeatherDisplay): void {
        this.subscribers.push(display);
    }

    public unsubscribe(display: IWeatherDisplay): void {
        let index: number = this.subscribers.indexOf(display);
        this.subscribers.splice(index, 1);
    }
}