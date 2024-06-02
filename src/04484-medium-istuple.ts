// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
  Expect<Equal<IsTuple<never>, false>>,
]


// ============= Your Code Here =============
// your answers

// number extends T['length'] -> An array's "length" is number, but a tuple's "length" is a specific number 
type IsTuple<T>= [T] extends [never] 
  ? false 
  : T extends readonly unknown[] 
      ? number extends T['length'] ? false : true 
      : false;