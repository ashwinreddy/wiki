A **kernel method** refactors a machine learning algorithm to implicitly push/augment each data point $x$ to a higher dimensional $\phi(x)$ (possibly infinite dimensional) feature space. 

$$
\boxed{\pmb{X}\pmb{X}^\mathsf{T} \to \pmb{K} = \Phi(\pmb{X})\Phi^\mathsf{T}(\pmb{X}) \implies \pmb{K}_{ij} = k(x_i, x_j) = \langle \Phi(x_i), \Phi(x_j) \rangle} \tag{Kernel Method}
$$

Formally, it replaces for [[design matrix]] $XX^\mathsf{T}$ with $K = \Phi(X)\Phi(X^\mathsf{T})$. A valid kernel function $k$ that represents an [[inner product]].

$$
k(x, y) = \langle \Phi(x), \Phi(y) \rangle
$$

$$
K_{ij} = k(x_i, x_j)
$$

The kernel trick, when applicable, speeds up a learning algorithm if the number of sample points is substantially less than the dimension of the lifted feature space. However, most liftings don't lead to super-fast kernels.

# Duality

One technique for kernalizing involves realizing that the parameter solution in non-kernalized version can be written as a linear combination of the inputs $X$ with coefficients $\alpha$. If you change the loss function to be in terms of this _dual representation_ $\alpha$, you can solve for it instead.

# Algorithms

Algorithms that can be kernalized include

* [[Ridge regression]]

# Kernel Examples

$$
k(x, y) = (x^\mathsf{T} y + 1)^r
\tag{Polynomial Kernel}
$$


$$
k(x, y) = \exp\left(- \lVert x - y \rVert^2 \over 2\sigma^2 \right)
\tag{Gaussian RBF Kernel}
$$

