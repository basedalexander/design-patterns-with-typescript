export interface IStack {
    push(item: any): void;
    peek(): any;
    pop(): void;
    empty(): boolean;
}

export class Stack implements IStack {
    private items: any[] = [];

    public push(item: any): void {
        this.items.push(item);
    }

    public peek(): any {
        return this.items[this.items.length - 1];
    }

    public pop(): void {
        this.items.pop();
    }

    public empty(): boolean {
        return !!this.items.length;
    }
}