import { Singleton } from './sigleton';

let uniqueObject = Singleton.getInstance();
let anotherObject = Singleton.getInstance();

console.log(uniqueObject === anotherObject);