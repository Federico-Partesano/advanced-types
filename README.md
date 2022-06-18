  

# advanced-types
### TypeScript required! [ npm install -g typescript ]
## If you have the desire to add any particular type you can apply at this [link](http://macheoo.altervista.org/advancedtypes/index.php), if possible it will be satisfied as soon as possible.
## Installation
```bash
yarn add advanced-types
```
## Type list
### Array:
| Name | Description |
|-----------|---------------------------------------------|
|FixedArray| Get an array with specific length and type |
|ValuesArray| Get all values of readonly array |
|IndexOfArrayByValue | Get all index of element of readonly with specific type |
|IndexOf | Get all index of readonly array |
|ArrayToString | Get a string from an array of strings |
### Number:
| Name | Description |
|-----------|---------------------------------------------|
|Enumerate| Get a range of numbers starting from 0 |
|Range| Get a range of numbers |
### String:
| Name | Description |
|-----------|---------------------------------------------|
|Join| Get the union of two strings by a separator. |
|NestedKeys| Get a string obtained from an object's key tree by following its complete path. |
|NestedPathKeys |Get a string obtained from an object's key tree by following its complete and incomplete path |
|RestrictedChars | Get string with only allowed chars |
|CheckMaxLength | Check if string respect max length |
|SnakeCaseToCamelCase | Get a string snake case in camel case |
### Object:
| Name | Description |
|-----------|---------------------------------------------|
|ValueOf| Get values type of object |
|Nullable| Get object with all values with possible value null or undefined |
|FilterKeyObjectByTypes| Get keys object with specific keys with the type of the desired value. |
##  Usage
### Array
#### FixedArray
```typescript
import { FixedArray } from  "advanced-types";
const  array1: FixedArray<number, 4> = [1,2,3,4];     //OK
const  array2: FixedArray<number, 4> = [1,2,3,4,5];  // ERROR 
const  array3: FixedArray<number, 4> = [1,2,3,"4"];  // ERROR
```
#### ValuesArray
```typescript
import { ValuesArray } from  "advanced-types";
const  array1: ValuesArray<[1,2,"2"]> = "2";     //OK
const  array2: ValuesArray<[1,2,"2"]> = 2;       //OK
const  array3: ValuesArray<[1,2,"2"]> = 3;       //ERROR, possible values: 1 | 2 | "2"
```
#### IndexOfArrayByValue
```typescript
import { IndexOfArrayByValue } from  "advanced-types";
const  array1: IndexOfArrayByValue<[1,2,"3","4"], string> = 2; // OK
const  array1: IndexOfArrayByValue<[1,2,"3","4"], string> = 0; // ERROR, possible values: 2 | 3
```
#### IndexOf
```typescript
import { IndexOf } from  "advanced-types";
const  array1: IndexOf<["1", 10, {name: "name"}]> = 0; // OK
const  array1: IndexOf<["1", 10, {name: "name"}]> = 3; // ERROR, possible values: 0 | 1 | 2
```
#### ArrayToString
```typescript
import { ArrayToString } from  "advanced-types";
const  string = ["a", "r","r","a","y"] as  const;
const  array: ArrayToString<typeof  string> = "array"; // OK
const  array: ArrayToString<typeof  string> = "arr";   // ERROR
```
### Number
#### Enumerate
```typescript
import { Enumerate } from  "advanced-types";
const  number1: Enumerate<5> = 2; // OK
const  number2: Enumerate<5> = 7;   // ERROR, ERROR, possible values: 0 | 1 | 2 | 3 | 4 | 5
```
#### Range
```typescript
import { Range } from  "advanced-types";
const  number1: Range<2, 5> = 2   // OK
const  number2: Range<2, 5> = 6   // ERROR, ERROR, possible values: 2 | 3 | 4 | 5
```
### String
#### Join
```typescript
import { Join } from  "advanced-types";
const  string1: Join<"GP" | "SN", "01" | "02", "-"> = "SN-02"; // OK
const  string2: Join<"GP" | "SN", "01" | "02", "_"> = "GP_01"; // OK
const  string3: Join<"GP" | "SN", "01" | "02", "-"> = "SN-03"; // ERROR, possible values: "GP-01" | "GP-02" | "SN-01" | "SN-02"
```
#### NestedKeys
```typescript
import { NestedKeys } from  "advanced-types";
const  object = {example:  "", key: { nestedKey:  2}}
const  string1: NestedKeys<typeof  object> = "key/nestedKey";      // OK
const  string2: NestedKeys<typeof  object, "."> = "key.nestedKey"; // OK
const  string3: NestedKeys<typeof  object, "."> = "key".           // ERROR, possible values: "example" | "key.nestedKey"
```
#### NestedPathKeys
```typescript
import { NestedPathKeys } from  "advanced-types";
const  object = {example:  "", key: { nestedKey:  2}}
const  string1: NestedKeys<typeof  object> = "key/nestedKey";      // OK
const  string2: NestedKeys<typeof  object, "."> = "key.nestedKey"; // OK
const  string3: NestedKeys<typeof  object, "."> = "key".           // OK
const  string4: NestedKeys<typeof  object, "."> = "nestedKey".     // ERROR, possible values: "example" | "key.nestedKey" | "key"
```
#### RestrictedChars
```typescript
import { RestrictedChars, Lower, Upper } from  "advanced-types";
const  string1: RestrictedChars<"example", "e" | "x" | "a" | "m" | "p" | "l"> = "example"; // OK
const  string2: RestrictedChars<"example", Lower> = "example"; // OK, Lower is a type of all lowercase letters
const  string3: RestrictedChars<"example", Upper> = "example"; // ERROR, Upper is a type of all uppercase letters
const  string4: RestrictedChars<"example", "e" | "x" | "a" | "m" | "p"> = "example";       // ERROR
```
#### CheckMaxLength
```typescript
import { CheckMaxLength } from  "advanced-types";
const  string1: CheckMaxLength<"example", 10> = "example"; // OK
const  string2: CheckMaxLength<"example", 4> = "example";  // ERROR, string too long
```
#### SnakeCaseToCamelCase
```typescript
import { SnakeCaseToCamelCase } from  "advanced-types";
const  string1: SnakeCaseToCamelCase<"example_camel_case"> = "exampleCamelCase"; // OK
const  string2: SnakeCaseToCamelCase<"example_camel_case"> = "example_camelcase"; // ERROR
```
### Object
#### ValueOf
```typescript
import { ValueOf } from  "advanced-types";
type  IExample = {example: string}
const  value1: ValueOf<IExample, "example"> = "2"; //OK
const  value2: ValueOf<IExample, "example"> = 2;   // ERROR, type number is not assignable to string
```
#### Nullable
```typescript
import { Nullable } from  "advanced-types";
type  IExample = {example: string, example2: number};
const  string1: Nullable<IExample> = {example:  undefined, example2:  null}; // OK
```
#### FilterKeyObjectByTypes
```typescript
import { FilterKeyObjectByTypes } from  "advanced-types";
type  IExample = {example: string, example2: number}
const  string1: FilterKeyObjectByTypes<IExample, number> = "example2"; // OK
const  string2: FilterKeyObjectByTypes<IExample, number> = "example";  // ERROR ERROR, possible values: "example2" 

```



