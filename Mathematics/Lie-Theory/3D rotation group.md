The **3D rotation group** is the [[Lie group]] of rotations in three-dimensions, denoted $\operatorname{SO}(3)$. It consists of matrices $O$ such that $O^\mathsf{T}O = I$ and $\det O = 1$

# [[Infinitesimal transformation]]

First, we need to determine $T_e \operatorname{SO}(3)$, which consists of all matrices $X$ such that $\exp(tX) \in \operatorname{SO}(3)$. The infinitesimal transformation is given by $O = I + \varepsilon J$.

We then impose \ref{eq:orth} to determine that

\\begin{gather}
(I + \varepsilon J)^\mathsf{T} (I + \varepsilon J) = I \\\\\
I  + \varepsilon J + \varepsilon J^\mathsf{T} + \cancelto{0}{\varepsilon^2 J^\mathsf{T} J} = I \\\\\
J + J^\mathsf{T} = 0 \tag{Skew-symmetric}
\end{gather}

This tells us that the Lie algebra consists of [[skew-symmetric matrices|skew-symmetric matrix]].

A Surprising fact is that

\begin{equation}
\dv{}{\phi}\Bigg\vert_{t=0} R(\phi, \vec{n})\vec{x} = \vec{n}\times\vec{x}
\end{equation}

# [[Lie algebra]]




A common basis choice is

\begin{equation}
L_x = \begin{bmatrix}0 & 0 & 0 \\\\\ 0 & 0 & -1 \\\\\ 0 & 1 & 0 \end{bmatrix}, \quad L_y = \begin{bmatrix}0 & 0 & 1 \\\\\ 0 & 0 & 0 \\\\\ -1 & 0 & 0 \end{bmatrix}, \quad L_z = \begin{bmatrix}0 & -1 & 0 \\\\\ 1 & 0 & 0 \\\\\ 0 & 0 & 0 \end{bmatrix}
\end{equation}

The Lie algebra $\mathfrak{so}(3)$ is isomorphic to $\RR^3$ with the [[cross product]] as the bracket.

\begin{equation}
\exp: \mathfrak{so}(3) \to \operatorname{SO}(3)
\end{equation}