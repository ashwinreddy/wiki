An **orthogonal matrix** is a matrix $Q$ that satisfies

\begin{equation}
\label{eq:orth-def}
Q^\top Q = I \iff Q^\top = Q^{-1}
\end{equation}

Intuitively, the rows/columns are orthonormal to each other.

# Properties

If we take the determinant of both sides of Equation \ref{eq:orth-def},

\begin{gather\*}
\det(Q^\top Q) = \det I \\\\\
(\det Q)^2 = 1 \\\\\
\det Q = \pm 1
\end{gather\*}

The norm of a vector is invariant to an orthonormal transformation. Basically, all orthogonal matrices can do is rotate.

\begin{align\*}
\lVert Q\vec{x} \rVert^2 &= (Q\vec{x})^\top (Q\vec{x}) \\\\\
&= \vec{x}^\top Q^\top Q \vec{x} \\\\\
&= \vec{x}^\top \vec{x} \\\\\
&= \lVert \vec{x} \rVert^2
\end{align\*}