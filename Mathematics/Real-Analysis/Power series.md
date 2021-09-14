A **power series** for a [[sequence]] $(a_n)_{n=0}^\infty$ is the [[series]]

$$
\sum_{n=0}^\infty a_n x^n
$$

One of the following must be true:

* the series converges for all $x \in \RR$
* the series converges only for $x=0$
* the series converges for all $x$ in some bounded interval centered at 0; the interval may be open, half-open, or closed.

# Root test

$$
\alpha = \limsup_{n \to \infty } \sqrt[n]{|a_n|}
$$

If $\alpha > 1$, then it converges absolutely. If $\alpha < 1$, then it does not converge. If $\alpha = 1$, no info.

# Radius of convergence

The power series only converges inside the radius of convergence $R$ and possibly at $R$.

$$
R = \frac{1}{\alpha}
$$