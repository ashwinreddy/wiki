Matrix multiplication defines a way to multiply an $m\times n$ matrix $A$ and an $n \times p$ matrix $B$.

\begin{equation}
(AB)\_{ij} = \sum_{k=1}^n A_{ik} B_{kj}
\end{equation}

\begin{gather\*}
A = \begin{bmatrix}
    \text{--} & \vec{a}_1^\top & \text{--} \\\\\
    \text{--} & \vec{a}_2^\top & \text{--} \\\\\
\end{bmatrix} \\\\\
B = \begin{bmatrix}
    \vert &  & \vert \\\\\
    b_1   & \dots & b_p   \\\\\
    \vert &  & \vert
\end{bmatrix}
\end{gather\*}