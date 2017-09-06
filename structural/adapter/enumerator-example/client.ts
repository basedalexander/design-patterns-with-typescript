import { IIterator } from './interfator.interface';
import { IEnumerator } from './enumerator.interface';
import { EnumeratorIteratorAdapter } from './enumerator-interator-adapter';

let enumeratorLike: IEnumerator;

let iterator: IIterator = new EnumeratorIteratorAdapter(enumeratorLike);

iterator.hasNext();
iterator.next();
iterator.remove();