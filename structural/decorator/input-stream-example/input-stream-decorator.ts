import { InputStream } from './input-stream';

export abstract class InputStreamDecorator extends InputStream {
    private input: InputStream;

    abstract read(path: string): string;
}