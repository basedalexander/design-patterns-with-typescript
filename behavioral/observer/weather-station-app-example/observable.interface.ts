export interface ISubject {
    subscribe(observer: IObserver): void;
    unsubscribe(observer: IObserver): void;
}

export interface IObserver {
    update(data: any): void;
}