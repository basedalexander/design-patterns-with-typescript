import { IObserver, ISubject } from './observable.interface';
import { WeatherDataObject } from './weather-station';

export interface IDisplay {
    display(data: any): void;
}

export class ForecastDisplay implements IObserver, IDisplay {
    constructor(private weatherData: ISubject) {
        this.weatherData.subscribe(this);
    }

    public update(data: WeatherDataObject): void {
        // does something with data
        this.display(data);
    }

    public display(data: WeatherDataObject): void {
        console.log('forecast display showing data)');
    }
}

export class CurrentStateDisplay implements IObserver, IDisplay {
    constructor(private weatherData: ISubject) {
        this.weatherData.subscribe(this);
    }

    public update(data: WeatherDataObject): void {
        // does something with data
        this.display(data);
    }

    public display(data: WeatherDataObject): void {
        console.log('current state display showing data)');
    }
}