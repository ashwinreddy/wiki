Matrix multiplication defines a way to multiply an $m\times n$ matrix $A$ and an $n \times p$ matrix $B$ to get an $m \times p$ matrix $C=AB$

\begin{equation}
C\_{ij} = \sum_{k=1}^n A_{ik} B_{kj}
\end{equation}

It might be easier to see if we list out $A$ and $B$.

\begin{gather\*}
A = \begin{bmatrix}
    \vec{a}_1^\top \\\\\
    \vdots \\\\\
    \vec{a}_m^\top \\\\\
\end{bmatrix} \\\\\
B = \begin{bmatrix}
    \vert &  & \vert \\\\\
    \vec{b}_1   & \dots & \vec{b}_p   \\\\\
    \vert &  & \vert
\end{bmatrix}
\end{gather\*}

> The $(i,j)$th entry of the result is the inner product of the $i$th row of $A$ and the $j$th column of $B$.

\begin{equation}
C\_{ij} =  \vec{a}_i^\top \vec{b}_j
\end{equation}

Matrix multiplication is generically not commutative. Apart from that, however, matrices operate as we might normally think they would so that

$$
(A+B)(A+B) = A^2 + AB + BA + B^2
$$