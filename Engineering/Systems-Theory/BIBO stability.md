**Bounded-input bounded-output (BIBO) stability** for a signal $x(t)$ means 

$$
|x(t)| \leqslant B , \quad \forall t\in \RR 
$$

$$
|x[n]| \leqslant B, \quad \forall n \in \mathbb{Z}
$$

If the [[linear time-invariant system]] has [[impulse response]] $h(t)$ or $h[n]$ then the condition is that

$$
\int_\RR |h(t)| \dd{t} < \infty
$$

$$
\sum_{n} |h[n]| \dd{t} < \infty
$$