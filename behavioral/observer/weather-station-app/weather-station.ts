import { IWeatherData } from './weather-data';

export type WeatherDataObject = { [key: string]: number };

export class WeatherStation {
    private weatherData:  IWeatherData;
    private data: WeatherDataObject;

    constructor(private weatherData: IWeatherData) {}

    change(data: WeatherDataObject): void {
        this.data = data;
        this.weatherData.notifyDataChanged(data);
    }
}
