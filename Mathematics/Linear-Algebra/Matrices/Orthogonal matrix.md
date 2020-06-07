An **orthogonal matrix** is a [[square matrix]] $Q$ whose rows/columns are [[orthonormal]] to each other. Equivalently, 

\begin{equation}
\label{eq:orth-def}
Q^\top Q = QQ^\top = I
\end{equation}

# Properties

* $Q$ is orthogonal if and only if its transpose is its inverse.

\begin{equation}
Q^\mathsf{T} = Q^{-1}
\end{equation}

* $Q$ is orthogonal if and only if its transpose is as well.

* If we take the determinant of both sides of Equation \ref{eq:orth-def},

$$
\det(Q^\top Q) = \det I \implies (\det Q)^2 = 1 \implies \det Q = \pm 1
$$

However, having a $\pm 1$ determinant does not guarantee orthonormality.

* The norm of a vector is invariant to an orthonormal transformation. Basically, all orthogonal matrices can do is rotate.

\begin{align\*}
\lVert Q\vec{x} \rVert^2 &= (Q\vec{x})^\top (Q\vec{x}) \\\\\
&= \vec{x}^\top Q^\top Q \vec{x} \\\\\
&= \vec{x}^\top \vec{x} \\\\\
&= \lVert \vec{x} \rVert^2
\end{align\*}