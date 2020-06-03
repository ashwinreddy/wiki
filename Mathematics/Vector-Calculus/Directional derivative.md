The **directional derivative** is a generalization of the [[partial derivative]]. Where a partial derivative measures the local rate of change for a single variable assuming unit speed, the directional derivative tells us the rate of change while moving with any velocity $\vec{v}$.

\begin{equation}
D_{\vec{v}} f(\vec{x}) = \lim_{t \to 0}\frac{f(\vec{x} + t\vec{v}) - f(\vec{x})}{t}
\end{equation}

But we should also be able to find this by using a parameterization curve $c: I \to \RR^n$ with $c(0) = p$ and computing

$$
\left[\dv{}{t} f(c(t))\right]_{t= 0}
$$