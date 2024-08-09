// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<ValidDate<"0102">, true>>,
  Expect<Equal<ValidDate<"0131">, true>>,
  Expect<Equal<ValidDate<"1231">, true>>,
  Expect<Equal<ValidDate<"0229">, false>>,
  Expect<Equal<ValidDate<"0100">, false>>,
  Expect<Equal<ValidDate<"0132">, false>>,
  Expect<Equal<ValidDate<"1301">, false>>,
  Expect<Equal<ValidDate<"0123">, true>>,
  Expect<Equal<ValidDate<"01234">, false>>,
  Expect<Equal<ValidDate<"">, false>>,
];

// ============= Your Code Here =============
type Digit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type DD = `${0 | 1 | 2}${Digit}` | "30";

type MM = `${0}${Digit}` | `${1}${0 | 1 | 2}`;

type TO = "01" | "03" | "05" | "07" | "08" | "10" | "12";

type ValidDate<T extends string> = T extends
  | Exclude<`${MM}${DD}`, "0229">
  | `${TO}31`
  ? true
  : false;
