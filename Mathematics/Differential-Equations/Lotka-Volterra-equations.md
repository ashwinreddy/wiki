\begin{gather}
\frac{dx}{dt} = \alpha x - \overbrace{\beta}^{\text{hunger}} xy \\\
\frac{dy}{dt} = \delta xy - \underbrace{\gamma}_{\text{natural death rate}} y
\end{gather}

Assumptions:

- prey always have food
- environment not changing
- limitless apetite

[[https://beta.observablehq.com/@mbostock/predator-and-prey]]

Claim: Trajectories move in cycle

\begin{gather}
\dot{x} = \alpha x - \beta y \qquad \dot{y} = \delta x y -\gamma y \\\
\frac{dy}{dx} = \frac{\dot{y}}{\dot{x}} = \frac{\delta x - y}{\beta y - \alpha} \cdot \left(-\frac{y}{x}\right) \\\
\frac{\beta y - \alpha}{y}\mathrm{d}y + \frac{\delta x - \gamma}{x}\mathrm{d}x = 0
\end{gather}

\begin{equation}
V(x, y) = \delta x - \gamma \ln x + \beta y - \alpha \ln y
\end{equation}

