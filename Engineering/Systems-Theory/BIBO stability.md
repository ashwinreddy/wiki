**Bounded-input bounded-output (BIBO) stability** for a signal $x(t)$ means 

$$
|x(t)| \leqslant B , \quad \forall t\in \RR 
$$

$$
|x[n]| \leqslant B, \quad \forall n \in \mathbb{Z}
$$

# LTI System

If the [[linear time-invariant system]] has [[impulse response]] $h(t)$ or $h[n]$ then the condition is that

## Continuous Time

$$
\int_\RR |h(t)| \dd{t} < \infty
$$

A LTI system is stable iff the region of convergence of $H(s)$ includes the $\iota\omega$-axis $\Re\\{s\\} = \sigma = 0$.

## Discrete Time

$$
\sum_{n \in \mathbb{Z}} |h[n]| \dd{t} < \infty
$$

A LTI system is stable iff the frequency response exists, meaning the region of convergence for [[transfer function]] $H(z)$ includes the unit circle $|z|=1$.
