type UnionToIntersection<U> = (
    U extends never ? never : (arg: U) => never
  ) extends (arg: infer I) => void
    ? I
    : never;
  
  type UnionToTuple<T> = UnionToIntersection<
    T extends never ? never : (t: T) => T
  > extends (_: never) => infer W
    ? [...UnionToTuple<Exclude<T, W>>, W]
    : [];

let x: UnionToTuple<1 | 2 | 3 | 4> = [1, 2, 3, 4];
let y: UnionToTuple<'a' | 'b' | 'c' | 'd'> = ['a', 'b', 'c', 'd'];


type TuplifyUnion<U extends string, R extends any[] = []> = {
    [S in U]: // for each variant in the union
      Exclude<U, S> extends never // remove it and..
        ? [...R, S] // ..stop recursion if it was the last variant
        : TuplifyUnion<Exclude<U, S>, [...R, S]> // ..recur if not
  }[U] // extract all values from the object
  
let b: TuplifyUnion<'a' | 'b' | 'c' | 'd'> = ['a', 'b', 'c', 'd'];

// https://zhuanlan.zhihu.com/p/58704376