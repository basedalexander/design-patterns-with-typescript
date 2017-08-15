import * as path from 'path';

import { InputStream } from './input-stream';
import { FileInputStream } from './components/file-input-stream';
import { LowerCaseInputStream } from './decorators/lower-case-input-stream';

let filePath: string = path.join(__dirname, 'file.txt');

let fileInputStream: InputStream = new FileInputStream();
let lowerCaseInputStream: InputStream = new LowerCaseInputStream(fileInputStream);

console.log(fileInputStream.read(filePath)); // I know DECORATOR!
console.log(lowerCaseInputStream.read(filePath)); // i know decorator!