An **eigenvector** $\vec{v}$ for a matrix $\bf A$ is one that satisfies the following equation for some corresponding **eigenvalue** $\lambda$.


_The zero vector does not count as an eigenvector, but zero can be an eigenvalue!_


\\[
\mathbf{A}\vec{v} = \lambda \vec{v}
\\]

Note that the equation above will only make sense if $\mathbf{A}$ is a [[square matrix]]. Let's rearrange the equation above.

\begin{gather}
\mathbf{A}\vec{v} = \lambda \mathbf{I} \vec{v} \\\
\mathbf{A}\vec{v} -  \lambda \mathbf{I} \vec{v} = \vec{0} \\\
\left(\mathbf{A}-\lambda \mathbf{I}\right)\vec{v} = \vec{0}
\end{gather}

The eigenvalues can be found by solving

\\[
\det(\mathbf{A} - \lambda \mathbf{I}) = 0
\\]

0 is an eigenvalue iff the determinant of $\bf A$ is 0.

(Need to insert a proof for this)

\begin{equation}
\operatorname{tr} A = \sum_i \lambda_i
\end{equation}

\begin{equation}
\det A = \prod_i \lambda_i
\end{equation}