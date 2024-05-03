# extends never

So `keyof T extends never` means that there are no known keys of the T type, since the `keyof` operator produces a union of known keys, and the `never` type is TypeScript's bottom type, a type which has no values at all. That means `keyof T extends never` behaves like this:

```ts
type Hmm<T> = keyof T extends never ? true : false
type X1 = Hmm<{ a: string }> // false, "a" is a known key
type X2 = Hmm<{}> // true, there are no known keys
type X3 = Hmm<object> // true, there are no known keys
type X4 = Hmm<string> // false, there are keys like "toUpperCase"
type X5 = Hmm<
  { a: string } | { b: string }
> // true, unions with no common keys have no known keys
```

[stackoverflow][0]

[0]: https://stackoverflow.com/questions/68693054/what-is-extends-never-used-for/68693367