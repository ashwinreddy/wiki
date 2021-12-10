A **kernel method** pushes data into a higher dimensional (possibly infinite dimensional) feature space. We can often us a kernel function $k$ that represents an inner product in the higher space without actually doing the inner product.

$$
k(x, y) = \langle \Phi(x), \Phi(y) \rangle
$$

$$
K_{ij} = k(x_i, x_j)
$$

The kernel trick, when applicable, speeds up a learning algorithm if the number of sample points is substantially less than the dimension of the lifted feature space.

[[Ridge regression]]