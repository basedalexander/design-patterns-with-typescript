export interface IDuck {
    quack(): void;
    fly(): void;
}

export class Duck implements IDuck {
    public quack(): void {
        console.log('quack');
    }

    public fly(): void {
        console.log('fly');
    }
}