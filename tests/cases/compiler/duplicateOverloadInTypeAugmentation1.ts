interface Array<T> {
    reduce(callbackfn: (accumulator: T, currentValue: T, currentIndex: number, array: T[]) => T,
        initialValue?: T): T;
    reduce<U>(callbackfn: (accumulator: U, currentValue: T, currentIndex: number, array: T[]) => U,
        initialValue: U): U;
}
var a: Array<string>;
var r5 = a.reduce((x, y) => x + y);