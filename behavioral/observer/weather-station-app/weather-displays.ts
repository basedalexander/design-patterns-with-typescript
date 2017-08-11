import { IObserver, ISubject } from './observable.interface';
import { WeatherDataObject } from './weather-station';

abstract class Display {
    abstract display(data: any): void;
}

export class ForecastDisplay extends Display implements IObserver {
    constructor(private weatherData: ISubject) {
        super();
        this.weatherData.subscribe(this);
    }

    public update(data: WeatherDataObject): void {
        // does something with data
        this.display(data);
    }

    private display(data: WeatherDataObject): void {
        console.log('forecast display showing data)');
    }
}

export class CurrentStateDisplay extends Display implements IObserver {
    constructor(private weatherData: ISubject) {
        super();
        this.weatherData.subscribe(this);
    }

    public update(data: WeatherDataObject): void {
        // does something with data
        this.display(data);
    }

    private display(data: WeatherDataObject): void {
        console.log('current state display showing data)');
    }
}