An **eigenpair** for a linear transformation $T$ for a vector space $V$ over a field $F$ is a $(\lambda \in F, \vec{v} \in V)$ satisfying the property

\begin{equation}
T(\vec{v}) = \lambda \vec{v}.
\end{equation}

We call the $\lambda$ an **eigenvalue** and the $\vec{v}$ an eigenvector. Note that we typically exclude the zero vector for $\vec{v}$ because it is trivially true; however, a zero eigenvalue is interesting because it means a non-trivial nullspace.

If our linear transformation in question is an $n \times n$ matrix $\mathbf{A}$, we can find the specific eigenpairs by first determining the eigenvalues.

\begin{gather}
\mathbf{A}\vec{v} = \lambda \vec{v} \\\\\
\mathbf{A}\vec{v} - \lambda \vec{v} = 0 \\\
\mathbf{A}\vec{v} - \lambda I\vec{v} = 0 \\
\left(\mathbf{A} - \lambda I \right)\vec{v} = 0 \\
\end{gather}