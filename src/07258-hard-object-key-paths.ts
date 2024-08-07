// ============= Test Cases =============
import type { Equal, Expect, ExpectExtends } from "./test-utils";

const ref = {
  count: 1,
  person: {
    name: "cattchen",
    age: 22,
    books: ["book1", "book2"],
    pets: [
      {
        type: "cat",
      },
    ],
  },
};

type cases = [
  Expect<Equal<ObjectKeyPaths<{ name: string; age: number }>, "name" | "age">>,
  Expect<
    Equal<
      ObjectKeyPaths<{
        refCount: number;
        person: { name: string; age: number };
      }>,
      "refCount" | "person" | "person.name" | "person.age"
    >
  >,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "count">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.name">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.age">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.books">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.pets">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.books.0">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.books.1">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.books[0]">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.books.[0]">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.pets.0.type">>,
  Expect<Equal<ExpectExtends<ObjectKeyPaths<typeof ref>, "notExist">, false>>,
  Expect<
    Equal<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.notExist">, false>
  >,
  Expect<
    Equal<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.name.">, false>
  >,
  Expect<
    Equal<ExpectExtends<ObjectKeyPaths<typeof ref>, ".person.name">, false>
  >,
  Expect<
    Equal<
      ExpectExtends<ObjectKeyPaths<typeof ref>, "person.pets.[0]type">,
      false
    >
  >,
];

// ============= Your Code Here =============
type Path<T extends number | string, Root extends boolean> = Root extends true
  ? `${T}`
  : `.${T}` | (T extends number ? `[${T}]` | `.[${T}]` : never);

type ObjectKeyPaths<
  T extends object,
  Root extends boolean = true,
  K extends keyof T = keyof T,
> = K extends string | number
  ?
      | Path<K, Root>
      | (T[K] extends object
          ? `${Path<K, Root>}${ObjectKeyPaths<T[K], false>}`
          : never)
  : never;

type a = ObjectKeyPaths<{ name: string; age: number }>;
