// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<
    Equal<
      Camelize<{
        some_prop: string;
        prop: { another_prop: string };
        array: [
          { snake_case: string },
          { another_element: { yet_another_prop: string } },
          { yet_another_element: string },
        ];
      }>,
      {
        someProp: string;
        prop: { anotherProp: string };
        array: [
          { snakeCase: string },
          { anotherElement: { yetAnotherProp: string } },
          { yetAnotherElement: string },
        ];
      }
    >
  >,
];

// ============= Your Code Here =============
type SnakeToCamel<T> = T extends `${infer Start}_${infer Rest}`
  ? `${Start}${Capitalize<SnakeToCamel<Rest>>}`
  : T;

type Camelize<T> = T extends any[]
  ? { [K in keyof T]: Camelize<T[K]> }
  : {
      [K in keyof T as SnakeToCamel<K>]: Camelize<T[K]>;
    };
