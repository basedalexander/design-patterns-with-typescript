import { IFlyBehaviour } from './interfaces';

export class FlyWithWingsBehavour implements IFlyBehaviour {
    public fly(): void {
        console.log('flying with wings');
    }
}

export class FlyWithNoWingsBehaviour implements IFlyBehaviour {
    public fly(): void {
        console.log(`can't fly without wings :(`);
    }
}