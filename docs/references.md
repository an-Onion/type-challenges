# References

* [template-literal-types][0]
* [Uppercase, Lowercase, Capitalize, Uncapitalize][1]

# class

In typescript, when you wrote a class A, you defined two types in its type system:

* A is the type of the instance of class A
* typeof A is the type of the class object, sayclass A

So, any instance of class A is just an object, `keyof` keyword return its public fields.

e.g. [hard: ClassPublicKeys][2]

[0]: https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
[1]: https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#intrinsic-string-manipulation-types
[2]: https://github.com/type-challenges/type-challenges/issues/21570