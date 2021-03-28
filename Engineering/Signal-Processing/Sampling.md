**Sampling** is selecting values periodically from a continuous-time signal $x(t)$ at some fixed time interval $T$. Equivalently, we can talk about a sampling frequency $f_s = \frac{1}{T}$ and $\omega_s = \frac{2\pi}{T}$. 

These samples $\\{ x(nT) \\}$ for $n \in \mathbb{Z}$ make up a discrete-time signal $x_d[n]$. This discrete time signal can actually be represented as a train of [[Dirac delta function]] in continuous space, if needed:

$$
x_p(t) = \sum_{n=-\infty}^\infty x(nT)\delta(t- nT)
$$

Or, more compactly with the [[Shah function]]

$$
x_p(t) = x(t) \cdot f_s Ш(t f_s)
$$