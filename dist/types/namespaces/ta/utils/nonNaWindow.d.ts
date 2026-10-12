export declare const isNa: (v: any) => boolean;
/**
 * The last `length` non-na values of a source, newest first, and their sum: the window TradingView's
 * `ta.sma`, `ta.variance`, `ta.stdev`, `ta.median`, `ta.vwma` and `ta.correlation` use. An na value is
 * skipped, not counted, so a bar whose value is na leaves the window as it was. `undefined` while
 * fewer than `length` non-na values have been seen.
 *
 * `valueAt(k)` reads the source `k` bars back (0 = current). State lives in `context.taState[key]`
 * with the usual committed / tentative split. Each value keeps the number of the call it was read on,
 * so a call made after skipped bars (the function called inside an `if`) backfills from the source
 * right behind the oldest value it holds. Once a backfill has reached the first bar, calls on
 * consecutive bars do not scan the history again (a long na stretch would make that quadratic).
 */
export declare function nonNaWindow(context: any, key: string, valueAt: (k: number) => number, length: number): {
    values: number[];
    sum: number;
} | undefined;
