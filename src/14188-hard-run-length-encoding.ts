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
      ? ''
      : L["length"] extends 1
        ? L[0]
        : `${L["length"]}${L[0]}`;

  export type Decode<S extends string> = any;
}

type a = RLE.Encode<"AAABCCXXXXXXY">