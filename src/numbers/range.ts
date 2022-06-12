
/**
 * Get a range of numbers starting from 0. (use Range for a range starting from a desired number)
 * @constructor
 * @param {number} finishRange - number to start the range from.
 */
export type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

/**
 * Get a range of numbers. (use Enumerate for a range with start from 0).
 * @constructor
 * @param {number} startRange - number to start the range from.
 * @param {number} finishRange - Number minus 1 from which the range must end.
 */
export type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;



