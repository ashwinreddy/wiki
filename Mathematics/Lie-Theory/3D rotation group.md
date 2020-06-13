The **3D rotation group** is the [[Lie group]] of rotations in three-dimensions, denoted $\operatorname{SO}(3)$. It consists of matrices $O$ such that 

\begin{equation}
O^\mathsf{T}O = I \tag{Orthogonality Condition}
\end{equation}

\begin{equation}
\det O = 1 \tag{Special Condition}
\end{equation}

# [[Lie algebra]]


First, we need to determine $T_e \operatorname{SO}(3)$, which consists of all matrices $X$ such that $\exp(tX) \in \operatorname{SO}(3)$. This happens to be skew-symmetric matrices. A common basis choice is

\begin{equation}
{\displaystyle L_{\mathbf {x} }=\left[{\begin{matrix}0&0&0\\0&0&-1\\0&1&0\end{matrix}}\right],\quad L_{\mathbf {y} }=\left[{\begin{matrix}0&0&1\\0&0&0\\-1&0&0\end{matrix}}\right],\quad L_{\mathbf {z} }=\left[{\begin{matrix}0&-1&0\\1&0&0\\0&0&0\end{matrix}}\right].}
\end{equation}

The Lie algebra $\mathfrak{so}(3)$ is isomorphic to $\RR^3$ with the [[cross product]] as the bracket.

\begin{equation}
\exp: \mathfrak{so}(3) \to \operatorname{SO}(3)
\end{equation}