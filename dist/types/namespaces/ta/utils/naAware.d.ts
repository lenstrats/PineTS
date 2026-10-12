/**
 * Whether `series` moved up (or down) on each of the last `length` bars, as TradingView's
 * `ta.rising` / `ta.falling` decide it: a count of consecutive moves in which a bar whose value or
 * previous value is na leaves the count unchanged, neither extending nor breaking the run.
 *
 * With a key, calls on consecutive bars update the count from the latest pair; a first call, a call
 * after skipped bars or a keyless call walks the series back instead.
 */
export declare function consecutiveMoves(context: any, key: string | undefined, series: any, length: number, up: boolean): boolean;
/**
 * The values of two series on the current bar and on the most recent earlier bar where both were
 * non-na: TradingView's `ta.cross` / `ta.crossover` / `ta.crossunder` compare against that bar, so
 * an na on the previous bar does not hide a cross.
 *
 * With a key, calls on consecutive bars carry the last valid pair forward; a first call, a call after
 * skipped bars or a keyless call walks the series back instead.
 */
export declare function crossPair(context: any, key: string | undefined, s1: any, s2: any): [number, number, number, number];
