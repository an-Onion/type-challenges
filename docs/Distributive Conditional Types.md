# Distributive Conditional Types

```ts
type ToArray<Type> = Type extends any ? Type[] : never;
 
type StrArrOrNumArr = ToArray<string | number>; // string[] | number[]
```

```ts
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
 
// 'ArrOfStrOrNum' is no longer a union.
type ArrOfStrOrNum = ToArrayNonDist<string | number>; // (string | number)[]
```

[0]: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types