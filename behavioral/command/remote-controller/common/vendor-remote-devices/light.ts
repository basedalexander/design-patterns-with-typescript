export enum LightState {
    On,
    Off,
    Dim
}

export class Light {
    private state: LightState;

    constructor() {
        this.state = LightState.Off;
    }


    public on(): void {
        this.state = LightState.On;
    }

    public off(): void {
        this.state = LightState.Off;
    }

    public dim(): void {
        this.state = LightState.Dim
    }

    public getState(): LightState {
        return this.state;
    }

    public setState(state: LightState): void {
        this.state = state;
    }
}