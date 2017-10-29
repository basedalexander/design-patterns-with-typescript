export interface IObservable {
    subscribe(f: Function): ISubscription;
    unsubscribe(f: Function): void;
}

export interface IPublishable {
    publish(data: any): void;
}

export interface IPublisher extends IObservable, IPublishable {}

export type Subscriber = (data: any) => void;

export interface ISubscription {
    unsubscribe(): void;
}