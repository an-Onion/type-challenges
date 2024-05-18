// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
  Expect<Equal<IsUnion<undefined | null | void | ''>, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | 'a'>, false>>,
  Expect<Equal<IsUnion<never>, false>>,
]


// ============= Your Code Here =============
type IsUnion<T, C extends T = T> =
  (T extends infer TItem // Iterate over T, here TItem is an item from the original union T. Ingredients 1&2
    ? C extends TItem // C holds the original union T. Does union T extends an item from it? // Ingredient 3
      ? true // yes. that could only be true if union T consist of one item
      : unknown // no
    : never
  ) extends true ? false : true // have we got true from the above? yes - it's not a union
