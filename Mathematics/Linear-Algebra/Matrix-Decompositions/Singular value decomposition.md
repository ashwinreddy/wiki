The **singular value decomposition (SVD)** generalizes a diagonalization to any $m \times n$ matrix $A$. The decomposition requires a diagonal matrix $\Sigma$ and orthogonal matrices $U$ and $V$.

$$
A = U\Sigma V^\mathsf{T}
$$

In other words, every linear transformation breaks down into rotation, stretch, rotation. Where does this come from, and why is it useful? We can reverse engineer it by considering the product of $A$ with itself. There are two plausible ways to do this:

$$
A^\mathsf{T}A = V\Sigma^2 V^\mathsf{T}
$$

$$
AA^\mathsf{T} = U\Sigma^2 U^\mathsf{T}
$$