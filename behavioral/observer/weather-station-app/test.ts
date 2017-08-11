import { WeatherStation } from './weather-station';
import { IWeatherData, WeatherData } from './weather-data';
import { CurrentStateDisplay, IWeatherDisplay } from './weather-displays';

let weatherData: IWeatherData = new WeatherData();
let weatherStation = new WeatherStation(weatherData);

let currentStateDisplay: IWeatherDisplay = new CurrentStateDisplay(weatherData);
let forecastDisplay: IWeatherDisplay = new CurrentStateDisplay(weatherData);

const data: Object = {
    temperature: 20,
    humidity: 35,
    pressure: 100
};

weatherStation.change(data); // all the displays subscribed for updates will be updated.