The **singular value decomposition (SVD)** is a (non-unique) [[matrix decomposition]] for any $m \times n$ [[matrix]] $\mathbf{A}$ of rank $r$ into

$$
A = U\Sigma V^\mathsf{T}
$$

where $U$ contains the **left singular vectors**, $\Sigma$ has the [[singular values|singular value]], and $V$ contains the right singular vectors.

$$
A = \begin{bmatrix}u_1 & u_2 & \cdots & u_m \end{bmatrix} \begin{bmatrix}\sigma_1  \\ &  \ddots \\ & & \sigma_m \end{bmatrix} & \begin{bmatrix}v_1 & v_2 & \cdots & v_n \end{bmatrix}^\mathsf{T} \tag{Full SVD}
$$

$$
A = \begin{bmatrix}u_1 & u_2 & \cdots & u_r \end{bmatrix} \begin{bmatrix}\sigma_1  \\ &  \ddots \\ & & \sigma_r \end{bmatrix} & \begin{bmatrix}v_1 & v_2 & \cdots & v_r \end{bmatrix}^\mathsf{T} \tag{Compact/Thin SVD}
$$

In the full SVD, rectangular diagonal matrix $\mathbf{\Sigma}$ containing the [[singular values|singular value]] and [[orthogonal matrices|orthogonal matrix]] $\mathbf{U}$ and $\mathbf{V}$. 


\begin{align\*}
U &= \operatorname{eigenvecs} \mathbf{A}\mathbf{A}^\mathsf{T} \\
V &= \operatorname{eigenvecs} \mathbf{A}^\mathsf{T}\mathbf{A}
\end{align\*}

# Spaces

The left singular vectors span the column space of $A$. In fact, if we just select the top $r$ vectors, we get an [[orthonormal basis]]!

\begin{align\*}
\operatorname{Col}(\mathbf{A}) &= \operatorname{span} \\{ u_i \\} \\
\operatorname{Row}(\mathbf{A}) &= \operatorname{span} \\{ v_i \\}\_{i=1}^{r} \\
\operatorname{Null}(\mathbf{A}) &= \operatorname{span} \\{ v_i \\}_{i=r+1}^{n}
\end{align\*}

# Properties

$$
\operatorname{rank}(A) = \operatorname{rank}(\Sigma)
$$