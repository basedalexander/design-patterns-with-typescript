import { IObservable, IPublisher, ISubscription, Subscriber } from './interfaces';

export class Publisher implements IPublisher {
    private subsribers: Subscriber[] = [];

    public subscribe(subscriber: Subscriber): ISubscription {
        this.subsribers.push(subscriber);
        return new Subscription(this, subscriber);
    }

    public unsubscribe(subscriber: Subscriber): void {
        let index: number = this.subsribers.indexOf(subscriber);
        if (index !== -1) {
            this.subsribers.splice(index, 1);
        }
    }

    public publish(data: any): void {
        this.subsribers.forEach(subscriber => subscriber(data));
    }
}

export class Subscription implements ISubscription {
    constructor(private observable: IObservable, private subscriber: Subscriber) {}

    public unsubscribe(): void {
        this.observable.unsubscribe(this.subscriber);
    }
}