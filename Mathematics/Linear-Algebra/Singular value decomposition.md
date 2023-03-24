The **singular value decomposition (SVD)** of a [[Matrix]] $A \in \mathbf{R}^{m \times n}$ tells us that

$$
A = U\Sigma V^\mathsf{T},
$$

where $U$ and $V$ are [[Orthogonal matrix]] and $\Sigma$ is a [[Diagonal matrix]]. 

$$
\underbrace{A}\_{m \times n} = \underbrace{U}\_{m \times m}\cdot\underbrace{\Sigma}\_{m \times n}\cdot \underbrace{V^\mathsf{T}}_{n \times n},
$$

$$
Ay = \underbrace{U}\_{\text{Rotate Output}}\Sigma \underbrace{(V^\mathsf{T}y)}_{\text{Rotate Input}}
$$

Columns of $U$ are left singular vectors. Columns of $V$ are right singular vectors.

# Flavors

- The full SVD, the thin SVD, etc.