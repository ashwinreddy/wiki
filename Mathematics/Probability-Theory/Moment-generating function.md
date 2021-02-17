The **moment-generating function** of a [[random variable]] $X$ is the [[expected value]] as a [[function]] of $t$.

$$
M_X(t) = \mathbb{E}\left[ e^{tX} \right], \quad t \in \RR
$$

This function _uniquely_ determines the [[distribution]].

It encodes the moments of a distribution in the coefficients of a [[power series]].

$$
\left. \frac{\dd{}\^n}{\dd{t^n}} M_X(t)\right|_{t=0} = \mathbb{E}[X^n]
$$