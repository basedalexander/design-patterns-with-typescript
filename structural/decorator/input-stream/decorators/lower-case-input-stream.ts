import { InputStreamDecorator } from '../input-stream-decorator';
import { InputStream } from '../input-stream';

export class LowerCaseInputStream extends InputStreamDecorator {
    constructor(private inputStream: InputStream) {
        super();
    }

    public read(path: string): string {
        let text: string =  this.inputStream.read(path);
        return text.toLocaleLowerCase();
    }
}