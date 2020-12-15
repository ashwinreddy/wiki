**MapReduce** is a programming model where you supply a `map` and `reduce` function, and the work is distributed among many machines.

1. **Map** takes in some data object and produces `(key, value)` pairs
2. **Shuffle** takes all these pairs and then collates them by key.
3. **Reduce** processes all the `(key, value)` pairs for a given `key`


Let's use an example of counting the number of times a word appears in a document. Say I have 4 documents and 2 computers.