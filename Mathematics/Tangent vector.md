A **tangent vector** at a point $p$ on a [[manifold]] is the velocity you could have at that point. If a curve $\gamma$ arrives at $p$ at time 0, we write $\gamma(0)=p$. Then a tangent vector is simply a velocity that $\gamma$ could have.

\begin{equation}
\dot{\gamma}(0) = \lim_{t\to 0} \frac{\gamma(t) - \gamma(0)}{t}
\end{equation}



In the high school physics setting, it suffices to say this. However, for differential geometry, we need a more flexible definition. Operationally, a tangent vector is something you can take a [[directional derivative]] with respect to. More concretely, a tangent vector $v$ is a map

\begin{align}
v: C^\infty(M) &\to \RR \\\\\
f(x) &\mapsto \partial_{v} f(x)
\end{align}

