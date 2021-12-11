A **kernel method** refactors a machine learning algorithm to implicitly push/augment each data point $x$ to a higher dimensional $\phi(x)$ (possibly infinite dimensional) feature space. Formally, it replaces for [[design matrix]] $XX^\mathsf{T}$ with $K = \Phi(X)\Phi(X^\mathsf{T})$. A valid kernel function $k$ that represents an [[inner product]].

$$
k(x, y) = \langle \Phi(x), \Phi(y) \rangle
$$

$$
K_{ij} = k(x_i, x_j)
$$

The kernel trick, when applicable, speeds up a learning algorithm if the number of sample points is substantially less than the dimension of the lifted feature space. However, most liftings don't lead to super-fast kernels.

# Algorithms

Algorithms that can be kernalized include

* [[Ridge regression]]

# Examples

$$
k(x, y) = (x^\mathsf{T} y + 1)^r
\tag{Polynomial Kernel}
$$


$$
k(x, y) = \exp\left(- \lVert x - y \rVert^2 \over 2\sigma^2 \right)
\tag{Gaussian RBF Kernel}
$$

