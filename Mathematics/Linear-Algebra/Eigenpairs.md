An **eigenpair** for a [[matrix]] consists of the lines which are invariant under multiplication and the scaling factors for those lines. Formally, it is the pair for a linear map $T$ on a vector space $V$ over a field $k$ is a $(\lambda \in k, \vec{v} \in V)$ satisfying

\begin{equation}
T(\vec{v}) = \lambda \vec{v} \tag{Eigenequation}
\end{equation}

We call the $\lambda$ an **eigenvalue** and the $\vec{v}$ an **eigenvector**. Note that we typically exclude the zero vector for $\vec{v}$ because it is trivially true; however, a zero eigenvalue is interesting because it means a non-trivial nullspace. Additionally, eigenvectors are unique up to scalar multiplication, so any representative vector on the line spanned by one eigenvector will suffice.

[Here](https://setosa.io/ev/eigenvectors-and-eigenvalues/) is a good visualization.

[[_TOC_]]

# Properties

The determinant of a triangular matrix is the product of diagonals.

\begin{equation}
\operatorname{tr} A = \sum_{i=1}^n \lambda_i
\end{equation}

\begin{equation}
\det A = \prod_{i=1}^n \lambda_i
\end{equation}


# Computation

If our linear transformation in question is an $n \times n$ matrix $\mathbf{A}$, we can find the specific eigenpairs by first determining the eigenvalues. The trick is to recognize the asymmetry of the eigenequation (matrix-vector product vs scalar multiplication) and correct this by inserting a dummy identity matrix.


\begin{gather}
\mathbf{A}\vec{v} = \lambda \mathbf{I}\vec{v} \\\\\
\left(\mathbf{A} - \lambda \mathbf{I} \right)\vec{v} = 0
\end{gather}

Luckily, we can ignore the $\vec{v}$ in the last equation above and recognize that we must have a singular matrix, leaving us

\begin{equation}
\det(\mathbf{A} - \lambda \mathbf{I}) = 0 \tag{Characteristic Polynomial}
\end{equation}

The equation above is called the **characteristic polynomial** of $A$. It is a degree $n$ polynomial function of $\lambda$, so there are at most $n$ eigenvalues which can be found as roots. Then, the eigenvector is any element of the nullspace of $\mathbf{A} - \lambda\mathbf{I}$.
