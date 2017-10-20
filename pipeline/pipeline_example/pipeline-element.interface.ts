export interface IPipelineElement {
    setInput(inputStream: any): void;
    connect(next: IPipelineElement): void;
    process(): void;
    isComplete(): boolean;
}