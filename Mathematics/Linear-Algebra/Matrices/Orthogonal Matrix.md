An **orthogonal matrix** is a matrix $Q$ that satisfies

$$
Q^\top Q = I \iff Q^\top = Q^{-1}
$$

Intuitively, the rows/columns are orthonormal to each other.

\begin{align\*}
\lVert Q\vec{x} \rVert^2 &= (Q\vec{x})^\top (Q\vec{x}) \\\\\
&= \vec{x}^\top Q^\top Q \vec{x} \\\\\
&= \vec{x}^\top \vec{x} \\\\\
&= \lVert \vec{x} \rVert^2
\end{align\*}