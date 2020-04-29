**Low-rank approximation** is the problem of finding a rank $k < n$ $A_k$ that is as close as possible to matrix $A$. The Eckart-Young-Mirsky theorem says that we can do this for the Frobenius _and_ spectral norm using 

$$
A_k = \sum_{i=1}^k \sigma_i \vec{u}_i \vec{v}_i^\top
$$