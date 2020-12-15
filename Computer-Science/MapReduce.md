**MapReduce** is a programming model where you break your computation into 3 stages. Let's use an example of counting the number of times a word appears in a document. Say I have 4 documents and 2 computers.

1. **Map** produces `(key, value)` pairs
2. **Shuffle** combines the same keys togethers
3. **Reduce** processes all the `(key, value)` pairs for a given `key`