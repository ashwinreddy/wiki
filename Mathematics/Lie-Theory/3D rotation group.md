The **3D rotation group** is the [[Lie group]] of rotations in three-dimensions, denoted $\operatorname{SO}(3)$. It consists of matrices $O$ such that 

\begin{equation}
\label{eq:orth}
O^\mathsf{T}O = I \tag{Orthogonality Condition}
\end{equation}

\begin{equation}
\label{eq:spec}
\det O = 1 \tag{Special Condition}
\end{equation}

# [[Infinitesimal transformation]]

The infinitesimal transformation is given by

\begin{gather}
O = I + \varepsilon J
\end{gather}

We then impose \ref{eq:orth} to determine that

\begin{gather}
(I + \varepsilon J)^\mathsf{T}(I + \varepsilon J) = I \\\\\
I  + \varepsilon J + \varepsilon J^\mathsf{T} + \cancelto{0}{\varepsilon^2 J^\mathsf{T} J} = I \\\\
J + J^\mathsf{T} = 0 \tag{Antisymmetric}
\end{gather}


# [[Lie algebra]]


First, we need to determine $T_e \operatorname{SO}(3)$, which consists of all matrices $X$ such that $\exp(tX) \in \operatorname{SO}(3)$. This happens to be skew-symmetric matrices. 



A common basis choice is

\begin{equation}
L_x = \begin{bmatrix}0 & 0 & 0 \\\\\ 0 & 0 & -1 \\\\\ 0 & 1 & 0 \end{bmatrix}, \quad L_y = \begin{bmatrix}0 & 0 & 1 \\\\\ 0 & 0 & 0 \\\\\ -1 & 0 & 0 \end{bmatrix}, \quad L_z = \begin{bmatrix}0 & -1 & 0 \\\\\ 1 & 0 & 0 \\\\\ 0 & 0 & 0 \end{bmatrix}
\end{equation}

The Lie algebra $\mathfrak{so}(3)$ is isomorphic to $\RR^3$ with the [[cross product]] as the bracket.

\begin{equation}
\exp: \mathfrak{so}(3) \to \operatorname{SO}(3)
\end{equation}