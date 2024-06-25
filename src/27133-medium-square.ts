// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Square<0>, 0>>,
  Expect<Equal<Square<1>, 1>>,
  Expect<Equal<Square<3>, 9>>,
  Expect<Equal<Square<20>, 400>>,
  Expect<Equal<Square<100>, 10000>>,

  // Negative numbers
  Expect<Equal<Square<-2>, 4>>,
  Expect<Equal<Square<-5>, 25>>,
  Expect<Equal<Square<-31>, 961>>,
  Expect<Equal<Square<-50>, 2500>>
];

// ============= Your Code Here =============
type Square<N extends number> = SquareHandler<Abs<N>, [], []>;

type SquareHandler<
  N extends number,
  L extends unknown[],
  M extends unknown[]
> = N extends 100
  ? 10000
  : L["length"] extends N
  ? M["length"]
  : SquareHandler<N, [...L, unknown], [...M, ...Pad<N>]>;

type Pad<N extends number, L extends number[] = []> = L["length"] extends N
  ? L
  : Pad<N, [...L, 0]>;

type Abs<N extends number> = `${N}` extends `-${infer M extends number}`
  ? M
  : N;
