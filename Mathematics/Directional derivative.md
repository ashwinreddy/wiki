The **directional derivative** is an expansion to the [[derivative]] in higher dimensions that properly handles the idea of a "small step"/nudge/perturbation in an arbitrary direction.

\begin{equation}
\partial_v f(x) = \lim_{t \to 0}\frac{f(x+tv) - f(x)}{t}
\end{equation}

In practice, however, we already have a conception of the derivative. Imagining how you would naturally try to compute a directional derivative. Imagine the function $f$ is the temperature at every point in space. To see how it changes in a given direction, you would move in that direction and measure the change in temperature.

\begin{equation}
(\partial_{v} f)(x) = \left[\dv{}{t}f(x + tv)\right]_{t=0}
\end{equation}

A [[partial derivative]] is given by having ${v}$ purely in the direction of one input variable.

\begin{equation}
\partial_{v} f(x) = \nabla f(x) \cdot v = \sum_i v_i \pdv{f}{x_i}
\end{equation}

