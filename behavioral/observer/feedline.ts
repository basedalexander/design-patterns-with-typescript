import { IPublisher, ISubscription } from './interfaces';
import { ILogger } from './logger';


export interface IFeedLine {
    subscribeForUpdates(publisher: IPublisher);
}

export class FeedLine implements IFeedLine {
    private subscription: ISubscription;

    constructor(private logger: ILogger) {

    }

    public subscribeForUpdates(publisher: IPublisher): void {
        this.subscription = publisher.subscribe(data => this.log(data));
    }
    private log(data: any): void {
        this.logger.log(data);
    }
}