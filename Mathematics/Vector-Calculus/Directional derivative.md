The **directional derivative** is a generalization of the [[partial derivative]]. Where a partial derivative measures the local rate of change for a single variable assuming unit speed, the directional derivative tells us the rate of change while moving with any velocity $\vec{v}$.

\begin{equation}
D_{\vec{v}} f(\vec{x}) = \lim_{t \to 0}\frac{f(\vec{x} + t\vec{v}) - f(\vec{x})}{t}
\end{equation}

As a concrete example, imagine the function $f$ is a scalar field with the temperature at each point. The directional derivative tells you how hotter/cooler it's getting if you move around.