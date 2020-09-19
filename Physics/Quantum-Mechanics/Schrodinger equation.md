The **Schrodinger equation** is a linear partial differential equation, which in its non-relativistic form looks like

$$
\boxed{i \hbar \pdv{}{t} \Psi = - \frac{\hbar^2}{2m} \frac{\partial^2 \Psi}{\partial x^2} + V(x, t) \Psi}
$$

$$
\pdv{\Psi}{t}  = \frac{i\hbar}{2m} \frac{\partial^2 \Psi}{\partial x^2} - \frac{i}{\hbar} V(x, t) \Psi
$$

Suppose we were to attempt separation of variables, i.e. the solution we guess is

$$
\Psi(x, t) = \psi(x) \varphi(t)
$$

# Normalized Closure

The Schrodinger equation returns normalized distributions if given normalized distributions. We have to show that

\begin{gather}
\dv{}{t} \int_{-\infty}^\infty \dd{x} \cdot | \Psi(x, t)|^2 = 0 \\\\\
\int_{-\infty}^\infty \dd{x}\cdot \pdv{}{t} \left(  | \Psi(x, t)|^2 \right) = 0 \\\\\
\int_{-\infty}^\infty \dd{x}\cdot \pdv{}{t} \big (  \Psi(x, t)\Psi(x, t)^* \big ) = 0 \\\\\
\int_{-\infty}^\infty \dd{x}\cdot \left( \Psi(x, t)^\* \pdv{\Psi(x, t)}{t} + \Psi(x, t) \pdv{\Psi(x, t)^*}{t} \right) = 0 \\\\\
\end{gather}