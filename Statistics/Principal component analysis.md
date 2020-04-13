**Principal component analysis** is a technique for dimensionality reduction of an $m \times n$ data matrix $A$.

1. Decide on a dimension $d \ll n$ to project into.
2. De-mean the $A$ vector:

```python
mean_vec = np.mean(A, axis=0)
demeaned_A = A - mean_vec
```

3. Compute the $V$ from the [[SVD|singular value decomposition]] of $A$ to get

$$
A = U \Sigma V^T
$$

3. Pick off the first $d$ columns of $V$, assuming singular value ordered. Call this $n \times d$ matrix $B$ for basis.
4. Project $A$ into the lower space by $AB$ to get an $m \times d$ matrix.