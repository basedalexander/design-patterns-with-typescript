export interface IIterator {
    hasNext(): boolean;
    next(): any;
    remove(): void;
}