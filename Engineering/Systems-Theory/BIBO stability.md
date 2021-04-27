**Bounded-input bounded-output (BIBO) stability** for a signal $x(t)$ means 

$$
|x(t)| \leqslant B , \quad \forall t\in \RR 
$$

$$
|x[n]| \leqslant B, \quad \forall n \in \mathbb{Z}
$$

# LTI System

If the [[linear time-invariant system]] has [[impulse response]] $h(t)$ or $h[n]$ then the condition is that

$$
\int_\RR |h(t)| \dd{t} < \infty
$$

$$
\sum_{n \in \mathbb{Z}} |h[n]| \dd{t} < \infty
$$

A causal LTI system with rational transfer function $H(s)$ is stable iff all [[poles|zeros and poles]] of $H(s)$ have strictly negative real parts.

A causal LTI system with transfer function (from [[z-transform]]) $H(z)$ is stable iff all poles of $H(z)$ lie inside the unit circle.