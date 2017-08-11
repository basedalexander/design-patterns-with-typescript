import { IObservable } from './observable.interface';
import { WeatherDataObject } from './weather-station';

export interface IWeatherDisplay {
    update(data: WeatherDataObject): void;
}

export class ForecastDisplay implements IWeatherDisplay {
    constructor(private weatherData: IObservable) {
        this.weatherData.subscribe(this);
    }

    public update(data: WeatherDataObject): void {
        console.log('forecast display showing data)');
    }
}

export class CurrentStateDisplay implements IWeatherDisplay {
    constructor(private weatherData: IObservable) {
        this.weatherData.subscribe(this);
    }

    public update(data: WeatherDataObject): void {
        console.log('current state display showing data)');
    }
}