import { DvdPlayer } from './components/dvd-player';
import { Amplifier } from './components/amplifier';
import { Speakers } from './components/speakers';
import { TheaterLights } from './components/theater-lights';
import { Screen } from './components/screen';

export class HomeTheaterFacade {
    private turnedOn: boolean = false;

    constructor(
        private amp: Amplifier,
        private dvd: DvdPlayer,
        private screen: Screen,
        private speakers: Speakers,
        private lights: TheaterLights
    ) {

    }

    public turnOn(): void {
        this.amp.turnOn();
        this.dvd.turnOn();
        this.screen.turnOn();
        this.speakers.turnOn();
        this.lights.turnOn();

        this.turnedOn = true;
    }
    public turnOff(): void {
        this.amp.turnOff();
        this.dvd.turnOff();
        this.screen.turnOff();
        this.speakers.turnOff();
        this.lights.turnOff();

        this.turnedOn = true;
    }

    public watchMovie(): void {
        if (!this.turnedOn) {
            this.turnOn();
        }
        // insert dvd
        // dim lights
        // turn up amplifier
        // select and play movie
    }

    public turnOff(): void {
        this.turnOff();
    }
}