// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<4>, 3>>,
  Expect<Equal<Fibonacci<5>, 5>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]


// ============= Your Code Here =============
type Fibonacci<
  T extends number,
  I extends number[] = [1,1],
  P extends number[] = [1],
  C extends number[] = [1],
  > = T extends 1
  ? 1
  : I['length'] extends T
    ? C['length']
    : Fibonacci<T, [...I, 1], [...C], [...C, ...P]>