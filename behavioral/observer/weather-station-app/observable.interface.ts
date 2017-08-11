import { IWeatherDisplay } from './weather-displays';

export interface IObservable {
    subscribe(display: IWeatherDisplay): void;
    unsubscribe(display: IWeatherDisplay): void;
}