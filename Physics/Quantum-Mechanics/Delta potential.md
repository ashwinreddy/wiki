The **delta potential** is a [[Dirac delta function]]

$$
V(x) = -\alpha \delta(x)
$$

The [[time-independent Schrodinger equation]]:

$$
-\frac{\hbar^2}{2m} \frac{\dd{}^2 \psi}{\dd{x^2}} - \alpha \delta (x) \psi = E\psi
$$

When $x \neq 0$, we have $\delta(x) = 0$ and stitching the solutions together using [[boundary conditions|stationary state#boundary conditions]],

$$
\psi(x) = \begin{cases}B e^{\kappa x} & x \geq 0 \\\\ B e^{-\kappa x} & x \leq 0 \end{cases}
$$

Let us integrate the Schrodinger equation over the interval $[-\epsilon, +\epsilon]$.

$$
\Delta \left( \dv{\psi}{x} \right) = -\frac{2m\alpha}{\hbar^2}\psi(0)
$$

$$
\psi(x) = \frac{\sqrt{m\alpha}}{\hbar} e^{-m\alpha |x| / \hbar^2}, \qquad E = -\frac{m\alpha\^2}{2\hbar^2}
$$