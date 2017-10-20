import { IPipelineElement } from './pipeline-element.interface';

export class Pipeline {
    private pipeline: IPipelineElement[];

    public add(element: IPipelineElement): void {
        this.pipeline.push(element);

        const count: number = this.pipeline.length;

        if (count > 1) {
            this.pipeline[count - 2].connect(this.pipeline[count - 1]);
        }
    }

    public run(): void {
        let jobCompleted: boolean = false;

        while (!jobCompleted) {
            jobCompleted = true;

            for (let i = 0; i < this.pipeline.length; i++) {
                this.pipeline[i].process();

                jobCompleted = ( jobCompleted && this.pipeline[i].isComplete() );
            }
        }
    }
}