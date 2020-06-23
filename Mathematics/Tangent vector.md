A **tangent vector** is the velocity you could be or are going at for a point on a [[manifold]].  For example, $\dot{\gamma}(0)$ is a tangent vector if $\gamma(0)=p$ and

\begin{equation}
\dot{\gamma}(0) = \lim_{t\to 0} \frac{\gamma(t) - \gamma(0)}{t}
\end{equation}



In the high school physics setting, it suffices to say this. However, for differential geometry, we need a more flexible definition. Operationally, a tangent vector is something you can take a [[directional derivative]] with respect to. More concretely, a tangent vector $v$ is a map

\begin{align}
v: C^\infty(M) &\to \RR \\\\\
f(x) &\mapsto \partial_{v} f(x)
\end{align}

