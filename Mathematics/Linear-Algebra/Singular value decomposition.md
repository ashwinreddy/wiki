**Singular value decomposition (SVD)** is a [[matrix decomposition]] that can be applied to any $m \times n$ matrix $A$ of rank $r$. 

$$
A = \sum_{i=1}^r \sigma_i \vec{u}_i \vec{v}_i^\top
$$

# Computation

You may choose to use either $A^\top A$ or $AA^\top$ to find the SVD. In either case, the first step is to find its eigenvalues (they will be equal)