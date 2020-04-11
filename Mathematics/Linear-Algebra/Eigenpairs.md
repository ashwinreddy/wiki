An **eigenpair** for a linear transformation $T$ for a vector space $V$ over a field $F$ is a $(\lambda \in F, \vec{v} \in V)$ satisfying the **eigenequation**,

\begin{equation}
T(\vec{v}) = \lambda \vec{v}
\end{equation}

We call the $\lambda$ an **eigenvalue** and the $\vec{v}$ an **eigenvector**. Note that we typically exclude the zero vector for $\vec{v}$ because it is trivially true; however, a zero eigenvalue is interesting because it means a non-trivial nullspace. Additionally, eigenvectors are unique up to scalar multiplication, so any representative vector on the line spanned by one eigenvector will suffice.

If our linear transformation in question is an $n \times n$ matrix $\mathbf{A}$, we can find the specific eigenpairs by first determining the eigenvalues.


\begin{gather\*}
\mathbf{A}\vec{v} = \lambda \vec{v} \\\\\
\mathbf{A}\vec{v} - \lambda \vec{v} = 0 \\\\\
\mathbf{A}\vec{v} - \lambda \mathbf{I}\vec{v} = 0 \\\\\
\left(\mathbf{A} - \lambda \mathbf{I} \right)\vec{v} = 0
\end{gather\*}

Luckily, we can ignore the $\vec{v}$ in the last equation above and recognize that we must have a singular matrix, leaving us

\begin{equation}
\det(\mathbf{A} - \lambda \mathbf{I}) = 0
\end{equation}

The equation above is called the **characteristic polynomial** of $A$. It is a degree $n$ polynomial function of $\lambda$, so there are at most $n$ eigenvalues which can be found as roots. Then, the eigenvector is any element of the nullspace of $\mathbf{A} - \lambda\mathbf{I}$.

# Properties

The determinant of a triangular matrix is the product of diagonals.

\begin{equation}
\operatorname{tr} A = \sum_{i=1}^n \lambda_i
\end{equation}

\begin{equation}
\det A = \prod_{i=1}^n \lambda_i
\end{equation}