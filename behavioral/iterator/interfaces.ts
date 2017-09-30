export interface IIterator {
    hasNext(): boolean;
    next(): any;
}

export interface IIterable {
    createIterator(): IIterator;
}