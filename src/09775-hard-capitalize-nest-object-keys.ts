// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";
import { ExpectFalse, NotEqual } from "./test-utils";

type foo = {
  foo: string;
  bars: [{ foo: string }];
};

type Foo = {
  Foo: string;
  Bars: [
    {
      Foo: string;
    },
  ];
};

type cases = [Expect<Equal<Foo, CapitalizeNestObjectKeys<foo>>>];

// ============= Your Code Here =============
type CapitalizeNestObjectKeys<T> = T extends any[]
  ? {
      [K in keyof T]: CapitalizeNestObjectKeys<T[K]>;
    }
  : {
      [K in keyof T as `${Capitalize<string & K>}`]: CapitalizeNestObjectKeys<
        T[K]
      >;
    };
