A **kernel method** refactors a machine learning algorithm to implicitly push all the data points to a higher dimensional (possibly infinite dimensional) feature space. Formally, it replaces for [[design matrix]] $XX^\mathsf{T}$ with $K = \Phi(X)\Phi(X^\mathsf{T})$. A valid kernel function $k: \RR \times \RR \to \RR$ that represents an [[inner product]].

$$
k(x, y) = \langle \Phi(x), \Phi(y) \rangle
$$

$$
K_{ij} = k(x_i, x_j)
$$

The kernel trick, when applicable, speeds up a learning algorithm if the number of sample points is substantially less than the dimension of the lifted feature space. However, most liftings don't lead to super-fast kernels.

[[Ridge regression]]