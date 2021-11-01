**Levenshtein distance** is an edit distance allowing insertion, deletion, and substitution. 

We can use [[dynamic programming]]. Let's say our strings are $x[1\ldots m]$ and $y[1\ldots n]$. Let $E(i,j)$ be the edit distance for $x$ from $1$ to $i$ and $y$ from $1$ to $j$. Thus, we want $E(m, n)$. The recurrence relation is

$$
E(i, j) = \min \left\\{ 1 + E(i-1, j) , 1 + E(i, j-1), \big[ x[i] = y[j] \big] + E(i-1, j-1) \right\\}.
$$

where we use [[Iverson bracket]]. Then the algorithm consists of

1. Set $E(i, 0) = i$ for $i$ from $0$ to $m$
2. Set $E(0, j) = j$ for $j$ from $0$ to $n$
3. Fill in the rest of the table with the relation.
4. Return $E(m,n)$