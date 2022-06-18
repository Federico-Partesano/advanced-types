
      /**
 * Get values type of object
 * @constructor
 * @param {object} object - object.

 */
export type ValueOf<T,K extends keyof T> = T[K];


      /**
 * Get object with all values with possible value null or undefined.
 * @constructor
 * @param {object} object - object.

 */



export type Nullable<T extends object> = {
    [P in keyof T]: T[P] | null | undefined ;
  };


        /**
 * Get keys object with specific keys with the type of the desired value.
 * @constructor
 * @param {object} object - object.
 * @param {any} types - types to accept.

 */
  export type FilterKeyObjectByTypes<T extends object, K> ={[X in keyof T]: K extends ValueOf<T, X> ? X : never }[keyof T]


