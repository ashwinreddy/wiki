The **moment-generating function** of a [[random variable]] $X$ is the [[expected value]] as a [[function]] of $t$.

$$
M_X(t) = \mathbb{E}\left[ e^{tX} \right], \quad t \in \RR
$$

$$
M_X(t) = 1 + t \mathbb{E}(X) + \frac{t\^2}{2!}\mathbb{E}\left(X\^2\right) + \frac{t^3}{3!}\mathbb{E}\left(X\^3\right) + \dots
$$

This function _uniquely_ determines the [[probability distribution]].

It encodes the moments of a distribution in the coefficients of a [[power series]].

$$
\left. \frac{\dd{}\^n}{\dd{t^n}}\right|_{t=0} M_X(t) = \mathbb{E}(X^n)
$$