export interface ITurkey {
    gooble(): void;
    fly(): void;
}

export class Turkey implements ITurkey {
    public gooble(): void {
        console.log('gooble!');
    }

    public fly(): void {
        console.log('flying but not far');
    }
}