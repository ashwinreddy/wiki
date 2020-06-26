**Matrix similarity** is an [[equivalence relation]] for [[square matrices|square matrix]]: $\bf A$ and $\bf B$ are similar if there is an [[invertible matrix]] $\bf P$ such that

\begin{equation}
\bf{A=P^{-1}BP}
\end{equation}

Similar matrices have the same eigenvalues, but generically different eigenvectors. Suppose $\lambda$ is an eigenvalue for $\bf A$, meaning $\mathbf{A}\vec{x} = \lambda \vec{x}$. Now we substitute $\bf{A \mapsto P^{-1}BP}$ and left-multiply by $\bf P$:

$$
\mathbf{P^{-1} B P} \vec{x} = \lambda x \implies \mathbf{B}(\mathbf{P}x) = \lambda (\mathbf{P}x)
$$