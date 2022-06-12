
    export type Lower = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z';
    export type Upper = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | '' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

    // [`Email can only contain allowedChars`]

           /**
 * Get string with only allowed chars
 * @constructor
 * @param {string} string - String to be processed.
 * @param {string} allowedChars - characters to accept.

 */

    export type RestrictedChars<T extends string, A extends string, Y = T, N = never> =
      string extends T ? N :
      T extends `${infer F}${infer F}${infer F}${infer F}${infer F}${infer F}${infer R}` ?
      [F] extends [A] ? RestrictedChars<R, A, Y, N> : N :
      T extends `${infer F}${infer F}${infer F}${infer R}` ?
      [F] extends [A] ? RestrictedChars<R, A, Y, N> : N :
      T extends `${infer F}${infer R}` ?
      [F] extends [A] ? RestrictedChars<R, A, Y, N> : N :
      Y
    
                 /**
 * Get an array of characters of the string
 * @constructor
 * @param {string} string - String to be processed.

 */
      export type SplitCharsArray<T extends string> = string extends T ? string[] :
      T extends `${infer F1}${infer F2}${infer F3}${infer F4}${infer F5}${infer F6}${infer F7}${infer F8}${infer F9}${infer F10}${infer R}` ? [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, ...SplitCharsArray<R>] :
      T extends `${infer F1}${infer F2}${infer F3}${infer F4}${infer F5}${infer F6}${infer R}` ? [F1, F2, F3, F4, F5, F6, ...SplitCharsArray<R>] :
      T extends `${infer F1}${infer F2}${infer F3}${infer R}` ? [F1, F2, F3, ...SplitCharsArray<R>] :
      T extends `${infer F1}${infer R}` ? [F1, ...SplitCharsArray<R>] :
      []

                       /**
 * Get all single characters of the string
 * @constructor
 * @param {string} string - String to be processed.

 */
      export type SplitChars<T extends string> = SplitCharsArray<T>[number]
    

                       /**
 * Check if string respect max length
 * @constructor
 * @param {string} string - String to be processed.
 * @param {number} length - Max length of string.

 */
    export type CheckMaxLength<T extends string, L extends number, Y = T> =
      SplitCharsArray<T>[L] extends undefined ? Y : never;
    
    
    
