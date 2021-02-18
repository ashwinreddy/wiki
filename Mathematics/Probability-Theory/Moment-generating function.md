The **moment-generating function** of a [[random variable]] $X$ is the [[expected value]] as a [[function]] of $t$.

$$
M_X(t) \triangleq \mathbb{E}\left[ e^{tX} \right], \quad t \in \RR
$$

$$
M_X(t) = 1 + t \mathbb{E}(X) + \frac{t\^2}{2!}\mathbb{E}\left(X\^2\right) + \frac{t^3}{3!}\mathbb{E}\left(X\^3\right) + \dots
$$

It encodes the moments of a distribution in the coefficients of a [[power series]].

$$
\left( \left. \frac{\dd{}\^n}{\dd{t^n}} M_X(t) \right)\right|_{t=0} = \mathbb{E}(X^n)
$$

# Computation

$$
M_X(t) = \begin{cases} \sum_{i=1}^\infty e^{tx_i} p_i \\\\ \int_\RR e^{tx} f(x) \dd{x} \end{cases}
$$

# Examples

The m.g.f. of a constant $c$ is $e^{ct}$.

# Properties

If $Z = aX + bY$, then 

$$
M_Z(t) = M_X(at)M_Y(bt)
$$

Uniqueness
: The m.g.f uniquely determines the [[probability distribution]]. That is, if two r.v.s have the same m.g.f., they have the same distribution.

* $M_X(0) \equiv 1$, identically.