type Grow<T, A extends Array<T>> = ((x: T, ...xs: A) => void) extends ((...a: infer X) => void) ? X : never;
type GrowToSize<T, A extends Array<T>, N extends number> = { 0: A, 1: GrowToSize<T, Grow<T, A>, N> }[A['length'] extends N ? 0 : 1];


    /**
 * Get an array with specific length and type
 * @constructor
 * @param {any} type_elements of element array.
 * @param {number} length length of array
 */
export type FixedArray<T, N extends number> = GrowToSize<T, [], N>;


    /**
 * Get all values of readonly array
 * @constructor
 * @param {array} array Array to be processed.
 */
export type ValuesArray<T extends readonly  any[]> =  T[number];


    /**
 * Get all index of element of readonly with specific type. (use IndexOf if want get all index of readonly array)
 * @constructor
 * @param {array} array Array to be processed.
 * @param {any} value Accepted Values.
 */
export type IndexOfArrayByValue<T extends readonly any[], V  ,K extends Array<number> = [], L extends Array<any> = []> = T["length"] extends K["length"] ? L[number] : T[K["length"]] extends V  ? IndexOfArrayByValue<T,V,[...K, K["length"]], [...L, K["length"]]> :  IndexOfArrayByValue<T,V,[...K, K["length"]], L>


   /**
 * Get all index of readonly array. (use IndexOfArrayByValue if want get all index of element of readonly with specific type)
 * @constructor
 * @param {array} array Array to be processed.
 */
export type IndexOf<T extends readonly any[]> = Exclude<Partial<T>["length"], T["length"]>

