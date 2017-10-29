export type CompareFunc = (first: number, second: number) => number;

export class MyArray {
    public sort(array: any[], customCompareFunc?: CompareFunc): void {
        let currIndex: number = 0;
        let lastIndex: number = (array.length - 1);

        let compareFunc: CompareFunc = customCompareFunc || this.defaultCompareFunc;

        for (currIndex; currIndex < lastIndex; currIndex++) {

            let nextIndex: number = currIndex + 1;
            let comparisonResult: number = compareFunc(array[currIndex], array[nextIndex]);

            if (comparisonResult > 0) {
                this.swap(array, currIndex, nextIndex);
                this.sortBackwards(array, currIndex, compareFunc);
            }
        }
    }

    private sortBackwards(array: any[], fromIndex: number, compareFunc: CompareFunc): void {
        for (fromIndex; fromIndex > 0; fromIndex--) {
            let prevIndex: number = fromIndex - 1;

            let comparisonResult: number = compareFunc(array[prevIndex], array[fromIndex]);

            if (comparisonResult > 0) {
                this.swap(array, prevIndex, fromIndex);
            } else {
                return;
            }
        }
    }

    private swap(array: any[], aIndex: number, bIndex: number): void {
        let aIndexValue: any = array[aIndex];
        array[aIndex] = array[bIndex];
        array[bIndex] = aIndexValue;
    }

    private defaultCompareFunc(first: any, second: any): number {
        if ( (typeof first === 'number') && (typeof second === 'number') ) {
            return first - second;
        }

        else if (typeof first === 'string' && typeof second === 'string') {
            if (first < second) {
                return -1;
            }
            else if (first > second) {
                return 1;
            }
            else {
                return 0;
            }
        }

        throw new Error("Unable to compare elements of different types");
    }
}