The **chain rule** is an important rule in calculus that tells you how to take the [[derivative]] when you have function composition.

# Single variable

$$
\require{physics}
$$

Formally,

\begin{equation}
(f \circ g)\'(x) = (f' \circ g)(x) \cdot g'(x)
\end{equation}

Heuristically,

\begin{equation}
\dv{y}{x} = \dv{y}{u}\cdot\dv{u}{x}
\end{equation}

# Multivariable

_Example_. Suppose $u(x, y) = x^2 + y^2$ where $x(r, t) = r \sin (t)$ and $y(r, t) = \sin^2(t)$. Then,

$$
\pdv{u}{r} = \pdv{u}{x}\pdv{x}{r} + \pdv{u}{y}\pdv{y}{r}
$$