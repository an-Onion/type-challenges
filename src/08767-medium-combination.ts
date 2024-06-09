// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Combination<['foo', 'bar', 'baz']>,
  'foo' | 'bar' | 'baz' | 'foo bar' | 'foo bar baz' | 'foo baz' | 'foo baz bar' | 'bar foo' | 'bar foo baz' | 'bar baz' | 'bar baz foo' | 'baz foo' | 'baz foo bar' | 'baz bar' | 'baz bar foo'>>,
]


// ============= Your Code Here =============
type UnionCombination<T extends string, K extends string = T> =  K extends T
  ? K | `${K} ${UnionCombination<Exclude<T, K>>}` 
  : never

type Combination<T extends string[], All extends string = T[number]>
  = UnionCombination<All>

