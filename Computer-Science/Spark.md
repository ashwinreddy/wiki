**Spark** provides the following transforms and actions

Resilient Distributed Datasets (RDD)
: fancy array

Transforms from RDD to RDD

1. `map(f)` will call `f` on every element in the RDD
2. `flatMap(f)` same as `map(f)` but output is a sequence
3. `reduceByKey(f)` for a function $f: V \to V$. When called on $(K, V)$ pairs returns $(K, V)$ pairs where the values are now given by aggregation/reduction through $f$.

Actions from RDD to value
1. `reduce(f)` aggregate regardless of key using $f$.