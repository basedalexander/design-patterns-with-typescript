export class UnsupportedOperationError extends Error {
    constructor() {
        super('Operation is not supported');
    }
}