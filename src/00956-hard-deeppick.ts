// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type Obj = {
  a: number;
  b: string;
  c: boolean;
  obj: {
    d: number;
    e: string;
    f: boolean;
    obj2: {
      g: number;
      h: string;
      i: boolean;
    };
  };
  obj3: {
    j: number;
    k: string;
    l: boolean;
  };
};

type cases = [
  Expect<Equal<DeepPick<Obj, "">, unknown>>,
  Expect<Equal<DeepPick<Obj, "a">, { a: number }>>,
  Expect<Equal<DeepPick<Obj, "a" | "">, { a: number } & unknown>>,
  Expect<
    Equal<DeepPick<Obj, "a" | "obj.e">, { a: number } & { obj: { e: string } }>
  >,
  Expect<
    Equal<
      DeepPick<Obj, "a" | "obj.e" | "obj.obj2.i">,
      { a: number } & { obj: { e: string } } & { obj: { obj2: { i: boolean } } }
    >
  >,
];

// ============= Your Code Here =============
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;

type PickByPath<T, P> = P extends `${infer A}.${infer B}`
  ? A extends keyof T
    ? { [K in A]: PickByPath<T[A], B> }
    : never
  : P extends keyof T
    ? { [K in P]: T[P] }
    : never;

type DeepPick<
  T extends Record<string, any>,
  U extends string,
> = UnionToIntersection<U extends U ? PickByPath<T, U> : never>;
