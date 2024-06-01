// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  // do not support big int now
  // Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>,
]


// ============= Your Code Here =============
type ArrayWithLength<T extends number, U extends any[] = []> = U['length'] extends T ? U : ArrayWithLength<T, [true, ...U]>;
type GreaterThan<T extends number, U extends number> = ArrayWithLength<U> extends [...ArrayWithLength<T>, ...any[]] ? false : true;
