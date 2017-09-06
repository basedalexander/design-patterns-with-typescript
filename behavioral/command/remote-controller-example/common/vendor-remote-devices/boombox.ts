export class Boombox {
    private volume: number;

    private volumeLevels: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
    private currentVolumeLevel: number = 0;

    private NO_VOLUME_LEVEL: number = 0;
    private MAX_VOLUME_LEVEL: number = 7;
    private lastVolumeLevel: number = this.NO_VOLUME_LEVEL;

    public on(): void {
        this.setVolume(this.lastVolumeLevel);
        return;
    }

    public off(): void {
        this.setVolume(this.NO_VOLUME_LEVEL);
    }

    public volumenUp(): void {
        if (this.currentVolumeLevel < 0) {
            this.currentVolumeLevel = this.currentVolumeLevel + 1;
            this.lastVolumeLevel = this.currentVolumeLevel;
        }
    }

    public volumeDown(): void {
        if (this.currentVolumeLevel > this.volumeLevels[this.volumeLevels.length - 1]) {
            this.currentVolumeLevel = this.currentVolumeLevel - 1;
            this.setVolume(this.currentVolumeLevel);
        }
    }

    public getVolume(): number {
        return this.volumeLevels[this.currentVolumeLevel];
    }

    public setVolume(volumeLevel: number): void {
        this.currentVolumeLevel = this.volumeLevels.indexOf(volumeLevel);
        this.lastVolumeLevel = this.currentVolumeLevel;
    }
}