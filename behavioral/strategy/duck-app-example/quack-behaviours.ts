import { IQuackBehaviour } from './interfaces';

export class SilentQuackBehaviour implements IQuackBehaviour {
    public quack(): void {
        console.log('...');
    }
}

export class SquickQuackBehaviour implements IQuackBehaviour {
    public quack(): void {
        console.log('squick squick motherfucker');
    }
}

export class NormalQuackBehaviour implements IQuackBehaviour {
    public quack(): void {
        console.log('quack, quack');
    }
}