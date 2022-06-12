  type Prev = [
    never,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    ...0[]
  ];
  
  
  type Join<K, P, H extends string = "/"> = K extends string | number
    ? P extends string | number
      ? number extends P
        ? `${K}`
        : `${K}${"" extends P ? "" : `${H}`}${P}`
      : never
    : never;
  
  type Leaves<T, D extends number = 10, L extends string = "/"> = [D] extends [
    never
  ]
    ? never
    : T extends object
    ? { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D], L>, L> }[keyof T]
    : "";
  
  
    type Paths<T, D extends number = 10, L extends string = "/"> = [D] extends [never]
    ? never
    : T extends object
    ? {
        [K in keyof T]-?: K extends string | number
          ? `${K}` | Join<K, Paths<T[K], Prev[D], L>, L>
          : never;
      }[keyof T]
    : "";
  
    /**
 * Get a string obtained from an object's key tree by following its complete path (use NestedPathKeys for too incomplete path).
 * @constructor
 * @param {object} object - The object to be processed.
 * @param {string} separator - Default is "/", String that separates one key from another at a lower level.
 * @param {number} levels - Default is 10, Decides up to which engagement level the object is to be cycled.
 */
  export type NestedKeys<
    T extends object,
    K extends string = "/",
    D extends number = 10
  > = Leaves<T, D, K>;
  
  
      /**
 * Get a string obtained from an object's key tree by following its complete and incomplete path (use NestedKeys for only complete path).
 * @constructor
 * @param {object} object - The object to be processed.
 * @param {string} separator - Default is "/", String that separates one key from another at a lower level.
 * @param {number} levels - Default is 10, Decides up to which engagement level the object is to be cycled.
 */
  export type NestedPathKeys<
    T extends object,
    K extends string = "/",
    D extends number = 10
  > = Paths<T, D, K>;

  const tt: NestedKeys<{ciao: string, prova: {p: string}}> = "ciao"
  const tttt: NestedPathKeys<{ciao: string, prova: {p: string}}> = "prova"
  
  
  
  
  