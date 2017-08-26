export class Light {
    private isOn: boolean = false;

    public on(): void {
        this.isOn = true;
    }

    public off(): void {
        this.isOn = false;
    }
}