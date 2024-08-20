// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";
import { ExpectFalse, NotEqual } from "./test-utils";

type cases = [
  Expect<
    Equal<
      OptionalUndefined<{ value: string | undefined }, "value">,
      { value?: string | undefined }
    >
  >,
  Expect<
    Equal<
      OptionalUndefined<{ value: string; desc: string }, "value">,
      { value: string; desc: string }
    >
  >,
  Expect<
    Equal<
      OptionalUndefined<{ value: string | undefined; desc: string }, "value">,
      { value?: string; desc: string }
    >
  >,
  Expect<
    Equal<
      OptionalUndefined<
        { value: string | undefined; desc: string | undefined },
        "value"
      >,
      { value?: string | undefined; desc: string | undefined }
    >
  >,
  Expect<
    Equal<
      OptionalUndefined<
        { value: string | undefined; desc: string },
        "value" | "desc"
      >,
      { value?: string; desc: string }
    >
  >,
  Expect<
    Equal<
      OptionalUndefined<{
        value: string | undefined;
        desc: string | undefined;
      }>,
      { value?: string; desc?: string }
    >
  >,
  Expect<
    Equal<OptionalUndefined<{ value?: string }, "value">, { value?: string }>
  >,
  Expect<Equal<OptionalUndefined<{ value?: string }>, { value?: string }>>,
];

// ============= Your Code Here =============
type OptionalUndefined<T, Props extends keyof T = keyof T> = Omit<
  Omit<T, Props> & {
    [K in Props as undefined extends T[K] ? K : never]?: T[K];
  } & {
    [K in Props as undefined extends T[K] ? never : K]: T[K];
  },
  never
>;
