The **directional derivative** gives the rate of increase of a scalar function in a direction. As a concrete example, imagine the function $f$ is a scalar field with the temperature at each point. The directional derivative tells you how much hotter/cooler it's getting if you run in a certain direction. Therefore, one way to compute the directional derivative is to ask a friend $\gamma$ to run through the point $p=\gamma(0)$ at that speed $X=\gamma'(0)$ and ask them how much hotter it's getting.

\begin{equation}
\nabla_X f(x) = \left[\dv{}{t} f(\gamma(t))\right]_{t=0}
\end{equation}

# In Coordinates


The directional derivative can be built up using [[partial derivative]]. Where a partial derivative measures the local rate of change for a single variable assuming unit speed, the directional derivative tells us the rate of change while moving with any velocity $\vec{v}$.

\begin{equation}
D_{\vec{v}} f(\vec{x}) = \lim_{t \to 0}\frac{f(\vec{x} + t\vec{v}) - f(\vec{x})}{t}
\end{equation}
