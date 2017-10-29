export interface IPurchase {
    number: number;
    amount: number;
    purpose: string;
}

export class Purchase implements IPurchase {
    constructor(
        public number: number,
        public amount: number,
        public purpose: string,
    ) {}
}