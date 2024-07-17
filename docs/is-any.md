## What's any?


The way I like to see it is type ranges (like ranges in math)

any is Infinity range of all possible types. & operator narrows down the range, from wider to narrower.
Imagine number & 1: number is very wide range of possible types, and 1 is a subset of that range. When we apply & operator - the resulting range narrows down to the intersection of these two ranges of types, which becomes 1.

But in the solution above we check whether 0 type range extends 1 & T, which should never happen, because narrowing down to 1 makes no possible intersection with 0. These are sibling ranges.

But in Typescript any intersecting with <your_type> still returns any, which I dont understand, since we are trying to get intersection here, and Infinity intersecting with not-infinite range should get us that range