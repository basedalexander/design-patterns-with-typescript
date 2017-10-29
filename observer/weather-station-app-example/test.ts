import { WeatherStation } from './weather-station';
import { IWeatherData, WeatherData } from './weather-data';
import { CurrentStateDisplay, IDisplay } from './weather-displays';

let weatherData: IWeatherData = new WeatherData();
let weatherStation = new WeatherStation(weatherData);

let currentStateDisplay: IDisplay = new CurrentStateDisplay(weatherData);
let forecastDisplay: IDisplay = new CurrentStateDisplay(weatherData);

const data: Object = {
    temperature: 20,
    humidity: 35,
    pressure: 100
};

weatherStation.change(data); // all the displays subscribed for updates will be updated.