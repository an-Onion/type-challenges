# [Key Remapping via `as`][0]

In TypeScript 4.1 and onwards, you can re-map keys in mapped types with an as clause in a mapped type:

```ts
// 00003-medium-omit.ts
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}
```

But before TypeScript 4.1, you couldn't do this. Instead, you had to use a helper type:

```ts
// 00003-medium-omit.ts
type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
```


[0]: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as