/**
 * Rank Correlation Index: Spearman's rank correlation between the last `length` values of `source`
 * and their bar order, scaled to -100..100 (100 = rose on every bar).
 *
 * As on TradingView, tied values get their average rank, and the correlation is Pearson's on the
 * ranks (so it is not `1 - 6Σd² / (n(n² - 1))` when there are ties). A window holding an na value
 * gives na: TradingView returns a value there, ranked by a rule not reproduced here.
 */
export declare function rci(context: any): (source: any, _length: any, _callId?: string) => any;
