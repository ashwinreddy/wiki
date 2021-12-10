The **singular value decomposition (SVD)** is a (non-unique) [[matrix decomposition]] for any $m \times n$ matrix $A$ into

$$
A = U\Sigma V^{\mathsf{T}}.
$$

with rectangular diagonal matrix $\Sigma$ containing the [[singular values|singular value]] and [[orthogonal matrices|orthogonal matrix]] $U$ and $V$. Notice that we have

$$
AV = U\Sigma.
$$

\begin{equation}
A = \underbrace{U}\_{m \times m}\cdot\underbrace{\Sigma}\_{m \times n}\cdot \underbrace{V^\mathsf{T}}_{n \times n}
\end{equation}

The [[column space|range]] come from the **left singular vectors** $\\{ u_i \\}$, the eigenvectors of $XX^\mathsf{T}$. The row space comes from **right singular vectors** $\\{ v_i \\}$, the eigenvectors of $X^\mathsf{T}X$.

$$
X^\mathsf{T}X = V\Sigma \cancel{U^\mathsf{T}U}\Sigma V^\mathsf{T} = V \Sigma^2 V^\mathsf{T}
$$


# Spaces

The first $\operatorname{rank}(A)$ left singular vectors are an orthonormal basis for the column space of $A$.

The last right singular vectors are an orthonormal basis for the [[null space]] of $A$.