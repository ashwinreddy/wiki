**Levenshtein distance** is an edit distance allowing insertion, deletion, and substitution. 

We can use [[dynamic programming]]. Let's say our strings are $x[1\ldots m]$ and $y[1\ldots n]$. Let $E(i,j)$ be the edit distance for $x$ from $1$ to $i$ and $y$ from $1$ to $j$. Thus, we want $E(m, n)$.

$$
E(i, j) = \min \\{ 1 + E(i-1, j) , 1 + E(i, j-1), \mathsf{diff}(i,j) + E(i-1, j-1) \\}.
$$