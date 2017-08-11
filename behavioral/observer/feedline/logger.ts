export interface ILogger {
    log(data: string): void;
}

export class Logger implements ILogger {
    public log(data: string): void {
        console.log(data);
    }
}