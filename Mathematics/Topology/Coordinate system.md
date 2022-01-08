A **coordinate system** / **chart** on a [[manifold]] $M$ is a pair $(U, \varphi)$.

|   |   |   |
|---|---|----------------------|
|$U$|open subset of $M$ |**coordinate domain** / **coordinate neighborhood**|
|$\varphi$|[[homeomorphism]] $U \to \hat{U} \subseteq \RR^n$|**(local) coordinate map**|


where $U$ is an [[open subset|open set]] in $M$ known as the **coordinate domain** and $\varphi$ is the **(local) coordinate map**, a [[homeomorphism]] to Cartesian space.[^order]

\begin{align}
\varphi: U &\to \hat{U} \subseteq \RR^n \\\\\
x &\mapsto \begin{bmatrix} \varphi_1(x) \\\\\ \vdots \\\\ \varphi_n(x) \end{bmatrix}
\end{align}

If $\varphi(p)=0$, the chart is **centered at $p$**.

Coordinate (function)
: The $k$th coordinate of $\varphi$ is $\varphi_k$.

For example, if $X$ is the earth, then 

\begin{equation}
\varphi(\text{Paris}) = \begin{bmatrix} \mathsf{Latitude}(\text{Paris}) \\\\\ \mathsf{Longitude}(\text{Paris})\end{bmatrix}
\end{equation}


[^order]: Since the inverse of a homeomorphism is itself a homeomorphism, the domain and codomain don't matter so long as the choice is fixed. But when we consult a map we typically ask, "where is $x\in X$ located?"