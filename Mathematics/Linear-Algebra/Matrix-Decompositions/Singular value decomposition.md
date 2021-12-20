The **singular value decomposition (SVD)** is a (non-unique) [[matrix decomposition]] for any $m \times n$ [[matrix]] $\mathbf{A}$ of rank $r$ into

$$
\mathbf{A} = \mathbf{U}\mathbf{\Sigma} \mathbf{V}^\mathsf{T}
$$

where $\mathbf{U}$ contains the **left singular vectors**, $\mathbf{\Sigma}$ has the [[singular values|singular value]], and $\mathbf{V}$ contains the right singular vectors.

In the full SVD, rectangular diagonal matrix $\mathbf{\Sigma}$ containing the [[singular values|singular value]] and [[orthogonal matrices|orthogonal matrix]] $\mathbf{U}$ and $\mathbf{V}$. 


\begin{align\*}
\mathbf{U} &= \operatorname{eigenvecs} \mathbf{A}\mathbf{A}^\mathsf{T} \\\\\
\mathbf{V} &= \operatorname{eigenvecs} \mathbf{A}^\mathsf{T}\mathbf{A}
\end{align\*}

# Spaces

The left singular vectors span the column space of $A$. In fact, if we just select the top $r$ vectors, we get an [[orthonormal basis]]!

\begin{align\*}
\operatorname{Col}(\mathbf{A}) &= \operatorname{span} \\{ u_i \\} \\\\\
\operatorname{Row}(\mathbf{A}) &= \operatorname{span} \\{ v_i \\}\_{i=1}^{r} \\\\\
\operatorname{Null}(\mathbf{A}) &= \operatorname{span} \\{ v_i \\}_{i=r+1}^{n}
\end{align\*}

# Properties

$$
\operatorname{rank}(A) = \operatorname{rank}(\Sigma)
$$