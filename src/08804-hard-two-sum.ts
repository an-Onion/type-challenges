// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<TwoSum<[3, 3], 6>, true>>,
  Expect<Equal<TwoSum<[3, 2, 4], 6>, true>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 15>, false>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 9>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 0>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 1>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 2>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 3>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 4>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 5>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 6>, false>>,
  Expect<Equal<TwoSum<[3, 2, 0], 2>, true>>,
];

// ============= Your Code Here =============
type NtoA<N extends number, A extends string[] = []> = A["length"] extends N
  ? A
  : NtoA<N, [...A, "0"]>;

type TwoSum<A extends number[], T extends number> = A extends [
  infer F extends number,
  ...infer R extends number[],
]
  ? NtoA<T> extends [...NtoA<F>, ...infer L]
    ? L["length"] extends R[number]
      ? true
      : TwoSum<R, T>
    : TwoSum<R, T>
  : false;
