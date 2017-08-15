import { InputStream } from '../input-stream';
import fs from 'fs';

export class FileInputStream extends InputStream {
    private encoding: string = 'utf8';

    public read(path: string): string {
        return <string>fs.readFileSync(path, { encoding: this.encoding });
    }
}