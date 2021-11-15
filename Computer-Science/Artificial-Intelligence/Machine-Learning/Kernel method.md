A **kernel method** pushes data into a higher dimensional feature space. We can often us a kernel function $k$ that represents an inner product in the higher space without actually doing the inner product.

$$
k(x, y) = \langle \Phi(x), \Phi(y) \rangle
$$

$$
K_{ij} = k(x_i, x_j)
$$