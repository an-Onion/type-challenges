// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<BitwiseXOR<'0', '1'>, '1'>>,
  Expect<Equal<BitwiseXOR<'1', '1'>, '0'>>,
  Expect<Equal<BitwiseXOR<'10', '1'>, '11'>>,
  Expect<Equal<BitwiseXOR<'110', '1'>, '111'>>,
  Expect<Equal<BitwiseXOR<'101', '11'>, '110'>>,
]


// ============= Your Code Here =============
type XorLast<
  S1 extends string, 
  S2 extends string,
> = [S1, S2] extends [`${string}0`, `${string}0`] | [`${string}1`, `${string}1`] 
  ? '0' 
  : '1'

type BitwiseXOR<
  S1 extends string, 
  S2 extends string
> = [S1, S2] extends [`${infer A}${0|1}`, `${infer B}${0|1}`]
  ? `${BitwiseXOR<A,B>}${XorLast<S1, S2>}`
  : `${S1}${S2}`
