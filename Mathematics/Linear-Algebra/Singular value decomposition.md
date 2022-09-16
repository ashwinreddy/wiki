The **singular value decomposition (SVD)** of a [[matrix]] $A$ tells us that

$$
A = U\Sigma V^\mathsf{T},
$$

where $U$ and $V$ are [[orthogonal matrix]] and $\Sigma$ is a [[diagonal matrix]].

$$
Ay = \underbrace{U}\_{\text{Rotate Output}}\Sigma \underbrace{(V^\mathsf{T}y)}_{\text{Rotate Input}}
$$

Columns of $U$ are left singular vectors. Columns of $V$ are right singular vectors.

# Flavors

- The full SVD, the thin SVD, etc.