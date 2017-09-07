import { HomeTheaterFacade } from './home-theater-facade';
import { DvdPlayer } from './components/dvd-player';
import { Amplifier } from './components/amplifier';
import { Screen } from './components/screen';
import { Speakers } from './components/speakers';
import { TheaterLights } from './components/theater-lights';

let homeTheater: HomeTheaterFacade = new HomeTheaterFacade(
    new Amplifier(),
    new DvdPlayer(),
    new Screen(),
    new Speakers(),
    new TheaterLights()
);

homeTheater.watchMovie();