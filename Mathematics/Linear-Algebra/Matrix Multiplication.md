Matrix multiplication defines a way to multiply an $m\times n$ matrix $A$ and an $n \times p$ matrix $B$.

\begin{equation}
(AB)\_{ij} = \sum_{k=1}^n A_{ik} B_{kj}
\end{equation}

\begin{gather\*}
A = \begin{bmatrix}
    \vec{a}_1^\top \\\\\
    \vdots \\\\\
    \vec{a}_n^\top \\\\\
\end{bmatrix} \\\\\
B = \begin{bmatrix}
    \vert &  & \vert \\\\\
    \vec{b}_1   & \dots & \vec{b}_p   \\\\\
    \vert &  & \vert
\end{bmatrix}
\end{gather\*}