// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
  Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
  Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<''>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<'aaa'>, -1>>,
]


// ============= Your Code Here =============

type FirstUniqueCharIndex<
  T extends string,
  ACC extends string[] = []
> = T extends ''
  ? -1
  : T extends `${infer F}${infer R}`
    ? F extends ACC[number]
      ? FirstUniqueCharIndex<R, [...ACC, F]>
      : R extends `${string}${F}${string}`
        ? FirstUniqueCharIndex<R, [...ACC, F]>
        : ACC['length']
    : never

