**Quicksort**

# Algorithm

1. Pick a pivot $p$ uniformly at random from elements of array.
2. Split array into halves $A_1$, which are bigger than pivot, and $A_2$, which are less than pivot.
3. Sort them recursively: $[A_1, p, A_2]$

# Runtime

The runtime is proportional to the number of comparisons made. Let $X_{ij}$ be an [[indicator variable]]