export class CeilingFan {
    private static HIGH = 3;
    private static MEDIUM = 2;
    private static LOW = 1;
    private static OFF = 0;

    private speed: number;
    private location: string;

    constructor(location: string) {
        this.location = location;
        this.speed = CeilingFan.OFF;
    }

    public high(): void {
        this.speed = CeilingFan.HIGH;
    }

    public medium(): void {
        this.speed = CeilingFan.MEDIUM;
    }

    public low(): void {
        this.speed = CeilingFan.LOW;
    }

    public off(): void {
        this.speed = CeilingFan.OFF;
    }

    public getSpeed(): number {
        return this.speed;
    }

    public setSpeed(speed: number): void {
        this.speed = speed;
    }
}