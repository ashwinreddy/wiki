**Levenshtein distance** is an edit distance allowing insertion, deletion, and substitution. 

We can use [[dynamic programming]]. Let's say our strings are $x[1\ldots m]$ and $y[1\ldots n]$. Let $E(i,j)$ be the edit distance for $x$ from $1$ to $i$ and $y$ from $1$ to $j$. Thus, we want $E(m, n)$.