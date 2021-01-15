A **coordinate system** or **chart** for a [[manifold]] $M$ helps map out part of the manifold (or possibly even all of it) using Cartesian space. Let $U$ be an [[open set]] in $M$. The chart is a region $U$ and a [[homomorphism]] $\varphi$.[^order]

\begin{align}
\varphi: M \supset U &\to V \subset \RR^n \\\\\
x &\mapsto \begin{bmatrix} \varphi_1(x) \\\\\ \vdots \\\\ \varphi_n(x) \end{bmatrix}
\end{align}


Coordinate (function)
: The $k$th coordinate of $\varphi$ is $\varphi_k$.

For example, if $X$ is the earth, then 

\begin{equation}
\varphi(\text{Paris}) = \begin{bmatrix} \mathsf{Latitude}(\text{Paris}) \\\\\ \mathsf{Longitude}(\text{Paris})\end{bmatrix}
\end{equation}


[^order]: Since the inverse of a homeomorphism is itself a homeomorphism, the domain and codomain don't matter so long as the choice is fixed. But when we consult a map we typically ask, "where is $x\in X$ located?"