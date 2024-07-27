```
type Stringify<T> = {
  [K in keyof T]: string;
}

type a = Stringify<string>; // string
```

> This mapped type returns a primitive type, not an object type.
Mapped types declared as { [ K in keyof T ]: U } where T is a type parameter are known as homomorphic mapped types, which means that the mapped type is a structure preserving function of T. When type parameter T is instantiated with a primitive type the mapped type evaluates to the same primitive.


[0]: https://github.com/microsoft/TypeScript/issues/40012
[1]: https://github.com/microsoft/TypeScript/wiki/FAQ#common-bugs-that-arent-bugs