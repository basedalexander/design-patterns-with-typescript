import { IObservable } from './observable.interface';
import { WeatherDataObject } from './weather-station';

export interface IWeatherDisplay {
    update(data: WeatherDataObject): void;
}

export class ForecastDisplay implements IWeatherDisplay {
    update(data: WeatherDataObject): void {
        console.log('forecast display showing data)');
    }
    constructor(private weatherData: IObservable) {
        this.weatherData.subscribe(this);
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