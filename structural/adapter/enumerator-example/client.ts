import { IIterator } from './iterator.interface';
import { IEnumeration } from './enumeration.interface';
import { Enumeration2IteratorAdapter } from './enumeration2interator-adapter';
import { Iterator2EnumerationAdapter } from './iterator2enumeration-adapter';

let someEnumeration: IEnumeration;
let iterator: IIterator = new Enumeration2IteratorAdapter(someEnumeration);
iterator.hasNext();
iterator.next();
iterator.remove();

let someIterator: IIterator;
let enumeration: IEnumeration = new Iterator2EnumerationAdapter(someIterator);
enumeration.hasMoreElements();
enumeration.nextElement();