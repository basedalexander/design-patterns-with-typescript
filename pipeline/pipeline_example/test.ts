import { Pipeline } from './pipeline';
import { ConsoleWriter } from './console-writer';
import { LineCounter } from './line-counter';

const dumpFile = () => {
    let dumpFile: Pipeline = new Pipeline();
    dumpFile.add(new FileReader());
    dumpFile.add(new ConsoleWriter());

    dumpFile.run();
};

const countLines = () => {
    let countLines: Pipeline = new Pipeline();
    countLines.add(new FileReader());
    countLines.add(new LineCounter());
    countLines.add(new ConsoleWriter());

    countLines.run();
};

dumpFile();
countLines();