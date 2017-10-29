export class Singleton {
    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    private static instance: Singleton = null;

    private constructor() {}
}