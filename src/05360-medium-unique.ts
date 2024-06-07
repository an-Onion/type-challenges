// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>, [string, number, 1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[unknown, unknown, any, any, never, never]>, [unknown, any, never]>>,
]


// ============= Your Code Here =============
type Includes<F extends any[], U> = F extends [infer C, ...infer K] 
  ? Equal<C, U> extends true
    ? true
    : Includes<K, U>
  : false


type Unique<F extends any[], U extends any[] = []> = F extends [infer C, ...infer K]
  ? Includes<U, C> extends true
    ? Unique<K, U>
    : Unique<K, [...U, C]>
  : U


