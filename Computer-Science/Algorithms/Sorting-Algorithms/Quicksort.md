**Quicksort**

# Algorithm

1. Pick a pivot $p$ uniformly at random from elements of array.
2. Split array into halves $A_1$, which are bigger than pivot, and $A_2$, which are less than pivot.
3. Sort them recursively: $[A_1, p, A_2]$

# Runtime

The runtime is proportional to the number of comparisons made. Let $X_{ij}$ be an [[indicator function]] for the [[event]] that $i$th and $j$th smallest elements are ever compared.

$$
\mathbb{E}[X_{ij}] = \mathbb{P}\left(X_{ij} = 1\right) = \frac{2}{j-i + 1}
$$

\begin{align\*}
\mathbb{E}\_r\left[T(A, r)\right] &\leqslant \mathbb{E}_r \left[ C \sum_{i < j} X_{ij} \right]  \\\\
&= C \sum_{i=1}^{n-1} \sum_{j = i+1}^n \frac{2}{j - i + 1} \\\\
&= C \sum_{k=1}^{n-1} \frac{2}{ n - k + 1} k \\\\
& \leqslant 2Cn \sum_{k=1}^{n-1} \frac{1}{n-k+1} \\\\
&\leqslant 2Cn \int_1^n \frac{\dd{t}}{t} \\\\
&= 2 Cn \ln n
\end{align\*}