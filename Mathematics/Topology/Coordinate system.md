A **coordinate system** or **chart** for a [[manifold]] $X$ helps map out part of the manifold (or possibly even all of it) using Cartesian space. The chart is a homomorphism between open subsets of the two spaces.[^order]

\begin{align}
\varphi: X \supset U &\to V \subset \RR^n \\\\\
x &\mapsto \langle \varphi_1(x), \dots, \varphi_n(x) \rangle
\end{align}

For example, if $X$ is the earth, then $\varphi(\text{Paris})$ could be the latitude and longitude of Paris. Each of these is a coordinate.

Coordinate
: The $k$th coordinate of $\varphi$ is $\varphi_k$.


[^order]: Since the inverse of a homeomorphism is itself a homeomorphism, the domain and codomain don't matter so long as the choice is fixed. But when we consult a map we typically ask, "where is $x\in X$ located?"