// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<UnionToIntersection<"foo" | 42 | true>, "foo" & 42 & true>>,
  Expect<
    Equal<
      UnionToIntersection<(() => "foo") | ((i: 42) => true)>,
      (() => "foo") & ((i: 42) => true)
    >
  >,
];

// ============= Your Code Here =============
type UnionToIntersection<U> = (
  U extends any ? (arg: U) => any : never
) extends (arg: infer I) => void
  ? I
  : never;


  type A = 'foo' | 42 | true

type B = A extends any ? (arg: A) => any : never // (arg: A) => any 

type C = B extends ((arg: infer I) => void) ? I : never //  'foo' | 42 | true

type D = UnionToIntersection<A> //  'foo' & 42 & true === never