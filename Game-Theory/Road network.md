A **road network** is a [[graph]] with latency functions. Let $\ell_e(x)$ be the latency on edge $e$ as a function of $x$, the amount of traffic on the edge.

$$
L_P(f) = \sum_{e \in P}\ell_e(F_e)
$$

The potential function is

$$
\Phi(F) = \sum_e \int_0^{F_e} \ell_e(x) \dd{x}
$$