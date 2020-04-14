An **orthogonal matrix** is a matrix $Q$ whose rows/columns are orthonormal to each other. Equivalently, 

\begin{equation}
\label{eq:orth-def}
Q^\top Q = QQ^\top = I \iff Q^\top = Q^{-1}
\end{equation}




# Properties

* $Q \in O(n) \iff Q^\top \in O(n)$

* If we take the determinant of both sides of Equation \ref{eq:orth-def},

$$
\det(Q^\top Q) = (\det Q)^2 = \det I = 1 \implies \det Q = \pm 1
$$

* The norm of a vector is invariant to an orthonormal transformation. Basically, all orthogonal matrices can do is rotate.

\begin{align\*}
\lVert Q\vec{x} \rVert^2 &= (Q\vec{x})^\top (Q\vec{x}) \\\\\
&= \vec{x}^\top Q^\top Q \vec{x} \\\\\
&= \vec{x}^\top \vec{x} \\\\\
&= \lVert \vec{x} \rVert^2
\end{align\*}