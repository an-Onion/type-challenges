// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type Tests = [
  Expect<Equal<Hanoi<0>, []>>,
  Expect<Equal<Hanoi<1>, [["A", "B"]]>>,
  Expect<Equal<Hanoi<2>, [["A", "C"], ["A", "B"], ["C", "B"]]>>,
  Expect<
    Equal<
      Hanoi<3>,
      [
        ["A", "B"],
        ["A", "C"],
        ["B", "C"],
        ["A", "B"],
        ["C", "A"],
        ["C", "B"],
        ["A", "B"]
      ]
    >
  >,
  Expect<
    Equal<
      Hanoi<5>,
      [
        ["A", "B"],
        ["A", "C"],
        ["B", "C"],
        ["A", "B"],
        ["C", "A"],
        ["C", "B"],
        ["A", "B"],
        ["A", "C"],
        ["B", "C"],
        ["B", "A"],
        ["C", "A"],
        ["B", "C"],
        ["A", "B"],
        ["A", "C"],
        ["B", "C"],
        ["A", "B"],
        ["C", "A"],
        ["C", "B"],
        ["A", "B"],
        ["C", "A"],
        ["B", "C"],
        ["B", "A"],
        ["C", "A"],
        ["C", "B"],
        ["A", "B"],
        ["A", "C"],
        ["B", "C"],
        ["A", "B"],
        ["C", "A"],
        ["C", "B"],
        ["A", "B"]
      ]
    >
  >
];

// ============= Your Code Here =============
type Hanoi<
  Rings extends number,
  FromRod extends string = "A",
  ToRod extends string = "B",
  IntermediateRod extends string = "C",
  Acc extends unknown[] = []
> = Acc["length"] extends Rings
  ? []
  : [
      ...Hanoi<Rings, FromRod, IntermediateRod, ToRod, [...Acc, 0]>,
      [FromRod, ToRod],
      ...Hanoi<Rings, IntermediateRod, ToRod, FromRod, [...Acc, 0]>
    ];
