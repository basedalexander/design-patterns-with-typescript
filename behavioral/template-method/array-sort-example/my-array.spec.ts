var assert = require('assert');
import { MyArray } from './my-array';

describe('MyArray class', function() {
    let myArray = new MyArray();

    describe('sort()', function() {
        describe('should sort in descendant order by default', () => {
            it('should sort numbers in descendant order by default', function() {
                let arrOfNumbers: number[] = [2, 6, 21, 54, 46, 23, 13, 133];

                myArray.sort(arrOfNumbers);

                assert.equal(arrOfNumbers[0], 2);
                assert.equal(arrOfNumbers[2], 13);
                assert.equal(arrOfNumbers[7], 133);
            });

            it('should sort strings in descendant order by default', function() {
                let arrOfStrings: string[] = ['k', 'b', 'c', 'd', 'e', 'h', 'q', 'j'];

                myArray.sort(arrOfStrings);

                assert.equal(arrOfStrings[0], 'b');
                assert.equal(arrOfStrings[2], 'd');
                assert.equal(arrOfStrings[7], 'q');
            });
        });

        describe('should throw an error when given an array of different types', () => {
            it('should throw an error when given an array containing elements of different types', () => {
                let randomArray = [1,'s'];

                assert.throws(() => myArray.sort(randomArray));
            });

            it('should throw an error if theres at least one element that is not primitive', () => {
                let randomArray = [1, 2, {}];

                assert.throws(() => myArray.sort(randomArray));
            });
        });

        describe('with customCompareFunc provided', () => {
            let ascendingSortFunc = (first: any, second: any): number => {
                if ( (typeof first === 'number') && (typeof second === 'number') ) {
                    return second - first;
                }

                else if (typeof first === 'string' && typeof second === 'string') {
                    if (first < second) {
                        return 1;
                    }
                    else if (first > second) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                }

                throw new Error("Unable to compare elements of different types");
            };

            it('should sort in ascending order', () => {
                let arrOfNumbers: number[] = [2, 6, 21, 54, 46, 23, 13, 133];

                myArray.sort(arrOfNumbers, ascendingSortFunc);

                assert.equal(arrOfNumbers[0], 133);
                assert.equal(arrOfNumbers[7], 2);
            });

            it('should throw an error if theres at least one element that is not primitive', () => {
                let arrOfStrings = ['k', 'b', 'c', 'd', 'e', 'h', 'q', 'j'];

                myArray.sort(arrOfStrings, ascendingSortFunc);

                assert.equal(arrOfStrings[0], 'q');
                assert.equal(arrOfStrings[7], 'b');
            });
        });
    });
});
