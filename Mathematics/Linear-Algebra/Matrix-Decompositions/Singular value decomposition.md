The **singular value decomposition (SVD)** is a [[matrix decomposition]] that generalizes a [[diagonalization]] to any $m \times n$ matrix $A$. 

$$
X = \sum_{i=1}^{\min\{n, d\}} \sigma_i u_i v_i^\mathsf{T}
$$

The decomposition requires a [[diagonal matrix]] $\Sigma$ and [[orthogonal matrices|orthogonal matrix]] $U$ and $V$.

\begin{equation}
A = \underbrace{U}\_{m \times m}\cdot\underbrace{\Sigma}\_{m \times n}\cdot \underbrace{V^\mathsf{T}}_{n \times n}
\end{equation}

The [[range]] come from $\\{ u_i \\}$. The row space comes from $\\{ v_i \\}$