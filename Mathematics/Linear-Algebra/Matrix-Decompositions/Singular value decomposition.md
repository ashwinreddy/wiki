The **singular value decomposition (SVD)** is a [[matrix decomposition]] that generalizes a [[diagonalization]] to any $m \times n$ matrix $A$. The decomposition requires a [[diagonal matrix]] $\Sigma$ and [[orthogonal matrices|orthogonal matrix]] $U$ and $V$.

$$
A = \underbrace_{}{U}\Sigma V^\mathsf{T}
$$

where $U$ is $m \times m$ and $\Sigma$ is $m \times n$ and $V$ is $n \times n$

In other words, every linear transformation breaks down into rotation, stretch, rotation. Where does this come from, and why is it useful? We can reverse engineer it by considering the product of $A$ with itself. There are two possible ways to do this:

$$
A^\mathsf{T}A = V\Sigma^2 V^\mathsf{T}
$$

$$
AA^\mathsf{T} = U\Sigma^2 U^\mathsf{T}
$$