**Matrix similarity** is an [[equivalence relation]] for [[square matrices|square matrix]]: $A$ and $B$ are similar if there is an [[invertible matrix]] $P$ such that

\begin{equation}
A=P^{-1}BP
\end{equation}

Similar matrices have the same eigenvalues, but generically different eigenvectors. Suppose $\lambda$ is an eigenvalue for $A$, meaning $Ax = \lambda x$. Now we substitute $A \mapsto P^{-1}BP$ and left-multiply by $P$:

$$
P^{-1} B P x = \lambda x \implies B(Px) = \lambda (Px)
$$