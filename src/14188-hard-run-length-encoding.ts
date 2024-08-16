// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  // Raw string -> encoded string
  Expect<Equal<RLE.Encode<"AAABCCXXXXXXY">, "3AB2C6XY">>,

  // Encoded string -> decoded string
  Expect<Equal<RLE.Decode<"3AB2C6XY">, "AAABCCXXXXXXY">>,
];

// ============= Your Code Here =============
namespace RLE {
  export type Encode<
    S extends string,
    L extends any[] = [],
  > = S extends `${infer F}${infer Rest}`
    ? F extends L[0]
      ? Encode<Rest, [...L, F]>
      : L["length"] extends 0
        ? Encode<Rest, [F]>
        : L["length"] extends 1
          ? `${L[0]}${Encode<Rest, [F]>}`
          : `${L["length"]}${L[0]}${Encode<Rest, [F]>}`
    : L["length"] extends 0
      ? ""
      : L["length"] extends 1
        ? L[0]
        : `${L["length"]}${L[0]}`;

  export type Decode<
    S extends string, 
    L extends string = ''
  > = S extends `${infer F}${infer R}`
      ? F extends `${number}`
        ? Decode<R, `${L}${F}`>
        : `${Repeat<F, L extends '' ? '1' : L>}${Decode<R, ''>}`
      : "";

  type Repeat<
    S extends string,
    N extends string,
    C extends any[] = [],
  > = `${C['length']}` extends N ? "" : `${S}${Repeat<S, N, [...C, ""]>}`;
}
