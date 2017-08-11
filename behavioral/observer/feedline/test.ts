import { IPublisher } from './interfaces';
import { Publisher } from './publisher';
import { ILogger, Logger } from './logger';
import { FeedLine, IFeedLine } from './feedline';

let lovelyPublisher: IPublisher = new Publisher();

let logger: ILogger = new Logger();
let feedLine: IFeedLine = new FeedLine(logger);

feedLine.subscribeForUpdates(lovelyPublisher);
lovelyPublisher.publish('Hello once');
lovelyPublisher.publish('Hello twice');

