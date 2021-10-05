A **divide-and-conquer algorithm** is an [[algorithm]] that divides a problem into pieces and assembles the work of each piece. Using [[recurrence relation]] $T(n)$ for time with size $n$,

1. **Divide** into smaller subproblem $S_1(n)$
2. Solve subproblems recursively: $a T(n/b)$
3. Combine results (**conquer**): $S_2(n)$

$$
T(n) = a T(n/b) + \order{S_1(n) + S_2(n)}
$$

In some cases, we can use [[Master theorem]]. Otherwise,

_Example_. Consider $T(n) = 2T(n/2) + \order{n \log n}$. The total work we do will be

$$
\sum_{i=0}^{\log n} \cancel{2^i} \frac{n}{\cancel{2^i}} \log \left( \frac{n}{2^i}\right) \in \order{n \log^2 n}
$$